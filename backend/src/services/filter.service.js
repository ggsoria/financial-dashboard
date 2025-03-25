import { sequelize} from "../database/database.js";
import { format } from 'date-fns';
import { CURRENCY } from "../utils/enums.js";
import { Op } from "sequelize";


export const filterByGroupedDate = async (filter, data) => {
    let groupedData = []
    let filterDate;
    console.log(filter)
    switch (filter) {
        case "diario":
            filterDate = "yyyy-MM-dd";
            break;
        case "semanal":
            filterDate = "yyyy-ww"; 
            break;
        case "mensual":
            filterDate = "yyy-MM";
            break;
        case "anual":
            filterDate = "yyyy";
            break;
        default:
            return res.status(400).json({ message: "filter is not valid" });
            // console.log("first")
    }

    const dateMap = {};
    for (const element of data) {
        const formattedDate = format(new Date(element.date), filterDate);

        if (dateMap[formattedDate]) {
            dateMap[formattedDate].total += element.amount;
        } else {
            dateMap[formattedDate] = {
                grouped_date: formattedDate,
                total: element.amount,
            };
        }
    }

    groupedData = Object.values(dateMap);

    groupedData.sort((a, b) => {
        if (a.grouped_date > b.grouped_date) return 1;
        if (a.grouped_date < b.grouped_date) return -1;
        return 0;
    });

    console.log(groupedData);
    return groupedData;
}

export const filterByCurrency = (currency) => {
    if (currency && !Object.values(CURRENCY).includes(currency.toUpperCase())) {
        throw new Error(`Invalid currency. Use one of these options: ${Object.values(CURRENCY).join(", ")}`);
    }

    return currency ? { currency: currency.toUpperCase() } : {};
}

export const filterByDate = async (model, startDate, endDate, currency) => {
    const whereCondition = currency.toUpperCase()

    return await model.findAll({
        where: {
            date: {
                [Op.between]: [startDate, endDate]
            }, 
            currency: currency ? whereCondition : {}
        }
    });
};