import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { CURRENCY, EXPENSE_CATEGORY }  from"../utils/enums.js"

export const Expenses = sequelize.define("Expenses", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  amount: { type: DataTypes.FLOAT, allowNull: true },
  currency: { type: DataTypes.ENUM(...Object.values(CURRENCY)), allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  supplier_id: { type: DataTypes.UUID, allowNull: false },
  category: { type: DataTypes.ENUM(...Object.values(EXPENSE_CATEGORY)), allowNull: false },
});

