import {Sales} from '../models/Sales.js'
import { filterByCurrency, filterByDate, filterByGroupedDate } from '../services/filter.service.js';

export const getAllSales = async (req, res) => {
    try {
        const sales = await Sales.findAll();
        res.json(sales)
    } catch (error) {
        console.error("Error fetching sales:", error);
        res.status(500).json({ message: error.message })       
    }
}


export const getSaleById = async (req, res) => {
    try {
        const { id } = req.params
        console.log("sale id:", id)

        const sale = await Sales.findByPk(id)

        if (!sale) {
            return res.status(404).json({ message: "Sale not found" })
        }

        console.log("Sale found:", sale);
        res.json(sale);
    } catch (error) {
        console.error("Error fetching sale:", error);
        res.status(500).json({ message: error.message })
    }
}

// export const getSalesByDate = async (req, res) => {
//     const {filter} = req.query;
//     if (!filter) return res.status(400).json({ message: "Filter parameter is required" });

//     try {
//         const sales = await Sales.findAll();
//         const groupedSales = await filterByDate(filter, sales)
        
//         res.json(groupedSales);
//     } catch (error) {
//         console.error("Error fetching grouped sales:", error);
//         res.status(500).json({ message: error.message });
//     }
// };

// export const getSalesByCurrency = async (req, res) => {
//     const {currency} = req.query
//     console.log(currency)
//     if (!currency) return res.status(400).json({ message: "Currency parameter is required" });

//     try {
//         const currencyFilter = filterByCurrency(currency)
//         const sales = await Sales.findAll({
//             where: currencyFilter
//         })

//         res.json(sales)
//     } catch (error) {        
//         console.error("Error fetching grouped sales:", error);
//         res.status(500).json({ message: error.message });
//     }
// }

export const getFilteredSales = async (req, res) => {
    try {
        const { currency, dateFilter } = req.query;

        if (!currency && !dateFilter) {
            return res.status(400).json({ message: "At least one filter is required." });
        }

        const whereCondition = filterByCurrency(currency);

        const salesData = await Sales.findAll({ where: whereCondition });
        
        let filteredData = dateFilter ? await filterByGroupedDate(dateFilter, salesData) : salesData;

        res.json(filteredData);
    } catch (error) {
        console.error("Error fetching filtered sales:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getSalesByDate =  async (req, res) => {
    try {
        const { startDate, endDate, currency } = req.query;
        if (!startDate || !endDate) {
            return res.status(400).json({ error: "startDate y endDate are required" });
        }
        const sales = await filterByDate(Sales, startDate, endDate, currency);
        res.json(sales);
    } catch (error) {
        console.error("Error fetching sales:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}