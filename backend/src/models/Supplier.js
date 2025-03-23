import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { Expenses } from '../models/Expenses.js';

export const Supplier = sequelize.define("Supplier", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
  })
