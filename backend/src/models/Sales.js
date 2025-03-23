import { DataTypes } from "sequelize"
import {sequelize} from '../database/database.js'
import { CURRENCY }  from "../utils/enums.js"


export const Sales = sequelize.define('Sales', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    amount: { type: DataTypes.FLOAT, allowNull: true },
    currency: { type: DataTypes.ENUM(...Object.values(CURRENCY)), allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    product: { type: DataTypes.STRING, allowNull: false },
    customer_id: { type: DataTypes.UUID, allowNull: false},
})

