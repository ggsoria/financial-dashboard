import {Router} from 'express'
import expensesRouter from './expenses.routes.js'
import salesRouter from './sales.routes.js'

const router = Router()

router.use("/expenses", expensesRouter)
router.use("/sales", salesRouter)


export default router
