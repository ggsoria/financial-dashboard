import { Customer } from "../models/Customer.js";
import { Sales } from "../models/Sales.js";
import { Expenses } from "../models/Expenses.js";
import { Supplier } from "../models/Supplier.js";

// relationships
Customer.hasMany(Sales, { foreignKey: "customer_id", sourceKey: "id" });
Sales.belongsTo(Customer, { foreignKey: "customer_id", targetKey: "id" });

Supplier.hasMany(Expenses, { foreignKey: "supplier_id", sourceKey: "id" });
Expenses.belongsTo(Supplier, { foreignKey: "supplier_id", targetKey: "id" });

export const configAssociations = () => {
    console.log("Associations configured!");
};
