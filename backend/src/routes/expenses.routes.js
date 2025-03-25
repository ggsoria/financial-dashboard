import {Router} from 'express'
import { getAllExpenses, getExpenseById, getFilteredExpenses, getExpensesByDate } from '../controllers/expenses.controller.js';

const expensesRouter = Router()

expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/filters", getFilteredExpenses);
// expensesRouter.get("/filters", getExpenseByDate);
expensesRouter.get("/dateRange", getExpensesByDate);
expensesRouter.get("/:id", getExpenseById);


export default expensesRouter
