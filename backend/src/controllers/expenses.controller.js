import {Expenses} from '../models/Expenses.js'
import { filterByDate, filterByCurrency } from '../services/filter.service.js';

export const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expenses.findAll();
        res.json(expenses)
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ message: error.message })       
    }
}

export const getExpenseById = async (req, res) => {
    try {
        const { id } = req.params
        console.log("sale id:", id)

        const expense = await Expenses.findByPk(id)

        if (!expense) {
            return res.status(404).json({ message: "expense not found" })
        }

        console.log("Expense found:", expense);
        res.json(expense);
    } catch (error) {
        console.error("Error fetching expense:", error);
        res.status(500).json({ message: error.message })
    }
}

// export const getExpenseByDate = async (req, res) => {
//     const {filter} = req.query;
//     console.log(filter)
//     if (!filter) return res.status(400).json({ message: "Filter parameter is required" });

//     try {
//         const expenses = await Expenses.findAll();
//         const groupedExpenses = await filterByDate(filter, expenses)
        
//         res.json(groupedExpenses);
//     } catch (error) {
//         console.error("Error fetching grouped expenses:", error);
//         res.status(500).json({ message: error.message });
//     }
// };

export const getFilteredExpenses = async (req, res) => {
    try {
        const { currency, dateFilter } = req.query;

        if (!currency && !dateFilter) {
            return res.status(400).json({ message: "At least one filter is required." });
        }

        const whereCondition = filterByCurrency(currency);

        const salesData = await Sales.findAll({ where: whereCondition });
        
        let filteredData = dateFilter ? await filterByDate(dateFilter, salesData) : salesData;

        res.json(filteredData);
    } catch (error) {
        console.error("Error fetching filtered expenses:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
