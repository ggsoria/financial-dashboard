import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { Sales } from '../models/Sales.js';

export const Customer = sequelize.define("Customer", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
})
