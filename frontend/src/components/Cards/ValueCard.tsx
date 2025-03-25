import React, { useEffect, useState } from 'react'
import { CustomSelect } from '../Utils/CustomSelect'
import './ValueCard.css'
import api from '../api/axios';
import { GroupedTransaction } from '../../models/GroupedTransactions';
import { Currency } from '../../utils/enums/currency';

export const ValueCard = () => {
  const [selectedRange, setSelectedRange] = useState("Anual");
  const [value, setValue] = useState<number>(0);
  const [currency, setCurrency] = useState<Currency>(Currency.ARS);

  const fetchValue = async (range: string) => {
    try {
      const sales = await api.get('/sales/filters?dateFilter=' + range.toLowerCase())
      const totalSales = sales.data.reduce((sum: number, item: GroupedTransaction) => sum + item.total, 0);
      const expenses = await api.get('/expenses/filters?dateFilter=' + range.toLowerCase())
      const totalExpenses = expenses.data.reduce((sum: number, item: GroupedTransaction) => sum + item.total, 0);

      setValue(totalSales - totalExpenses)
      // setCurrency(currency)
    } catch (error) {
      console.error("Error fetching value:", error);
    }
  };

  const handleSelectChange = (newRange: string) => {
    setSelectedRange(newRange);
    fetchValue(newRange);
  };

  useEffect(() => {
    fetchValue(selectedRange);
  }, []);

  return (
    <div className='value-card__container'>
        <div className='value-card'>
            <CustomSelect onChange={handleSelectChange} />
            <div className='value-card-title'>Concepto de valor</div>
            <div className='value-card-value'>
              {`$ ${Intl.NumberFormat({ style: "currency"}).format(Math.round(value))} ${currency}`}
              <div className='value-card-description'>Texto de referencia de valor</div>
            </div>
            <button className='value-card-button'>Ver detalle</button>
        </div>
    </div>
  )
}
