import express from 'express'
import { sequelize } from './database/database.js'
import { configAssociations } from './database/tablesAsociations.js'
import { loadData } from './database/seeder.js'
import router from './routes/router.js'
// Models import
import './models/Sales.js'
import './models/Expenses.js'
import './models/Customer.js'
import './models/Supplier.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(router)

const main = async () => {
    try {
        configAssociations()
        await sequelize.sync({force:false})
        console.log('Connection has been established successfully!');
        await loadData() // ingest mocked data in the db

        app.listen(PORT, () => {
            console.log("Server is running on port", PORT)
        })
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();