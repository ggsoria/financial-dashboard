import { writeFileSync } from 'fs';
import {v4 as uuidv4} from 'uuid';

const suppliers = [
    "Proveedor A",
    "Proveedor B",
    "Proveedor C",
    "Proveedor D",
    "Proveedor E",
    "Proveedor F",
    "Proveedor G",
    "Proveedor H",
    "Proveedor I",
    "Proveedor J",
    "Proveedor K",
    "Proveedor L"
];

const customers= [
  "Juan Pérez" ,
  "Sara Campos" ,
  "Compañía XYZ" ,
  "Roberto Morales" ,
  "Ana Martínez" ,
  "Lucía Tech" ,
  "Jorge Gil" ,
  "Verónica Díaz" ,
  "María Rodríguez" ,
  "Pablo Reyes" ,
  "Rosa Méndez" ,
  "Carlos López" ,
  "Laura Gómez" ,
  "Pedro Sánchez" ,
  "Marta Fernández" ,
  "Diego Ramírez" ,
  "Sofía Torres" ,
  "Andrés López" ,
  "Carmen Ruiz" ,
  "Javier Castro"
]
  
  
const expenseCategories = [
    "Alquiler",
    "Logistica",
    "Servicios Publicos",
    "Suministros",
    "Mantenimiento",
    "Salarios",
    "Consultoria",
    "Publicidad",
    "Transporte",
    "Otros"
];

const products = [
    "Smartphone", 
    "Teclado Mecánico",
    "Cámara Web", "Impresora Láser", 
    "Tablet", 
    "Auriculares", 
    "Notebook", 
    "Disco SSD", 
    "Mouse Gamer", 
    "Proyector", 
    "Monitor 24"
];

const currencies = ["ARS", "USD"];

const suppliersData = [];
for (let i = 0; i < suppliers.length; i++) {
    const supplier = {
        id: uuidv4(),
        name: suppliers[i], 
    };
    suppliersData.push(supplier);
}

const customersData = [];
for (let i = 0; i < customers.length; i++) {
    const customer = {
        id: uuidv4(),
        name: customers[i], 
    };
    customersData.push(customer);
}

const randomDate = (startYear = 2025, startMonth = 1, startDay = 1) => {
    const startDate = new Date(startYear, startMonth - 1, startDay);
    const endDate = new Date(startYear, 11, 31);
    const delta = endDate - startDate;
    const randomDays = Math.floor(Math.random() * delta);
    const randomDate = new Date(startDate.getTime() + randomDays);
    return randomDate.toISOString().split('T')[0]; 
}

const expenses = [];
for (let i = 1; i <= 500; i++) {
    const expense = {
        id: uuidv4(),
        amount: parseFloat((Math.random() * (300000 - 100) + 100).toFixed(2)), 
        currency: currencies[Math.floor(Math.random() * currencies.length)],
        date: randomDate(),
        supplier_id: suppliersData[Math.floor(Math.random() * suppliersData.length)].id,
        category: expenseCategories[Math.floor(Math.random() * expenseCategories.length)]
    };
    expenses.push(expense);
}

const expensesData = { expenses };

const sales = [];
for (let i = 1; i <= 500; i++) {
   const sale = {
    id: uuidv4(),
    amount: parseFloat((Math.random() * (2000 - 50) + 50).toFixed(2)),
    currency: currencies[Math.floor(Math.random() * currencies.length)],
    date: randomDate(),
    product: products[Math.floor(Math.random() * products.length)],
    customer_id: customersData[Math.floor(Math.random() * customersData.length)].id
   } 
   sales.push(sale)
}

const salesData = { sales };

const customersFilePath = './customers_data.json';
const suppliersFilePath = './suppliers_data.json'
const expensesFilePath = './expenses_data.json';
const salesFilePath = './sales_data.json';

writeFileSync(customersFilePath, JSON.stringify(customersData, null, 4));
console.log(`customers json file saved in: ${customersFilePath}`);
writeFileSync(suppliersFilePath, JSON.stringify(suppliersData, null, 4));
console.log(`suppliers json file saved in: ${suppliersFilePath}`);
writeFileSync(expensesFilePath, JSON.stringify(expensesData, null, 4));
console.log(`expenses json file saved in: ${expensesFilePath}`);
writeFileSync(salesFilePath, JSON.stringify(salesData, null, 4));
console.log(`sales json file saved in: ${salesFilePath}`);
