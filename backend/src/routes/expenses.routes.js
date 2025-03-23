import {Router} from 'express'
import { getAllExpenses, getExpenseById, getFilteredExpenses } from '../controllers/expenses.controller.js';

const expensesRouter = Router()

expensesRouter.get("/", getAllExpenses);
expensesRouter.get("/filters", getFilteredExpenses);
// expensesRouter.get("/filters", getExpenseByDate);
expensesRouter.get("/:id", getExpenseById);


export default expensesRouter
