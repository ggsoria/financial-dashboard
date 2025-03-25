import { GroupedTransaction } from "../models/GroupedTransactions";

const monthNames = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
];

const getWeekOfYear = (date: Date) => {
  const startDate = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
  return Math.ceil((days + startDate.getDay() + 1) / 7);
};

export const mapGroupedTransactions = (data, temporality: string): GroupedTransaction[] => {
  const sortTransactions = data.sort((a, b) => {
    const dateA = new Date(a.date); 
    const dateB = new Date(b.date); 
    
    return dateA - dateB;
  });

  return sortTransactions.map(item => {
    const date = new Date(item.date);
    let groupedDate: string;
    let week;

    if(!temporality || temporality==='anual') {
      const month = item.grouped_date.split('-')[1];  
      const monthName = monthNames[parseInt(month) - 1]; 
      return {
        total: item.total, 
        grouped_date: monthName 
      };
    }

    switch (temporality) {
      case "mensual":
        week = getWeekOfYear(date);
        groupedDate = week.toString();
        break;

      case "semanal":
        groupedDate = date.toISOString().split('T')[0]; 
        break;

      case "diario":
        groupedDate = date.toISOString().split('T')[0];
        break;

      default:
        break;
    }
    return {
      total: item.amount, 
      grouped_date: groupedDate
    };
  });
}