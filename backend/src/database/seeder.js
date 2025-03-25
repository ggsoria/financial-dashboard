import { Sales } from '../models/Sales.js'
import { Expenses } from '../models/Expenses.js'
import { Customer } from '../models/Customer.js'
import { Supplier } from '../models/Supplier.js'
import customers from '../../resources/customers_data.json' assert { type: 'json' };
import suppliers from '../../resources/suppliers_data.json' assert { type: 'json' };
import expensesData from '../../resources/expenses_data.json' assert { type: 'json' };
import salesData from '../../resources/sales_data.json' assert { type: 'json' };

export const loadData = async () => {
  try {
    // Verificar si hay datos en las tablas antes de intentar cargar
    const customersCount = await Customer.count();
    if (customersCount === 0) {
      for (const customer of customers) {
        await Customer.create({
          id: customer.id,
          name: customer.name
        });
      }
      console.log('Customers data loaded.');
    } else {
      console.log("Customers data already exists.");
    }

    const suppliersCount = await Supplier.count();
    if (suppliersCount === 0) {
      for (const supplier of suppliers) {
        await Supplier.create({
          id: supplier.id,
          name: supplier.name
        });
      }
      console.log('Suppliers data loaded.');
    } else {
      console.log("Suppliers data already exists.");
    }

    const expensesCount = await Expenses.count();
    if (expensesCount === 0) {
      for (const expense of expensesData.expenses) {
        await Expenses.create({
          id: expense.id,
          amount: expense.amount,
          currency: expense.currency,
          date: expense.date,
          supplier_id: expense.supplier_id,
          category: expense.category,
        });
      }
      console.log('Expenses data loaded.');
    } else {
      console.log("Expenses data already exists.");
    }

    const salesCount = await Sales.count();
    if (salesCount === 0) {
      for (const sale of salesData.sales) { 
        await Sales.create({
          id: sale.id,
          amount: sale.amount,
          currency: sale.currency,
          date: sale.date,
          product: sale.product,
          customer_id: sale.customer_id,
        });
      }
      console.log('Sales data loaded.');
    } else {
      console.log("Sales data already exists.");
    }

    console.log('Data loaded correctly.');
  } catch (error) {
    console.error('Error loading data:', error);
  }
};
