import {Router} from 'express'
import {getAllSales, getSaleById, getFilteredSales, getSalesByDate} from '../controllers/sales.controller.js'

const salesRouter = Router()

salesRouter.get("/", getAllSales)
salesRouter.get("/filters", getFilteredSales)
// salesRouter.get("/filters", getSalesByCurrency)
// salesRouter.get("/filters", getSalesByDate)
salesRouter.get("/dateRange", getSalesByDate)
salesRouter.get("/:id", getSaleById)



export default salesRouter