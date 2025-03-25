import React, { useEffect, useState } from 'react'
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
import './Chart.css'
import { ChartTopBar } from './ChartTopBar';
import api from '../api/axios.tsx'
import { GroupedTransaction } from '../../models/GroupedTransactions.tsx';
import { mapGroupedTransactions } from '../../utils/dataMapper.tsx';

interface DateRange {
  startDate: string;
  endDate: string;
  temporality: string;
}

const monthNames = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
];

export const Chart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sales, setSales] = useState<GroupedTransaction[]>([])
  const [dateRange, setDateRange] = useState<DateRange>();

  useEffect(() => {
    const fetchSales = async () => {
      try {
        let response;
        if(!dateRange || dateRange.temporality === 'anual') {
          response = await api.get('/sales/filters?dateFilter=mensual')
        } else {
          response = await api.get(`/sales/dateRange?startDate=${dateRange?.startDate}&endDate=${dateRange?.endDate}&currency=ars`)
        }
        const formatedData = mapGroupedTransactions(response?.data, dateRange?.temporality)
        console.log(formatedData)
        setSales(formatedData)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchSales();
  }, [dateRange]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxTickValue =  Math.max(...sales.map(sale => sale.total));
  

  // const maxTickValue = getMaxTickValue(sales);

  const handleSelectChange = (dateRange: string) => {
    const today = new Date();
    let start: Date | undefined
    let end: Date | undefined

    switch (dateRange.toLocaleLowerCase()) {
      case "diario":
        start = new Date(today);
        end = new Date(today);
        break;
      case "semanal":
        start = new Date(today);
        start.setDate(today.getDate() - 7);
        end = new Date(today);
        break;
      case "mensual":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case "anual":
        start = new Date(today.getFullYear(), 0, 1);
        end = new Date(today.getFullYear(), 11, 31);
        break;
    }        
    if (!start || !end) return;

    setDateRange({
      // Formato YYYY-MM-DD
      startDate: start.toISOString().split("T")[0], 
      endDate: end.toISOString().split("T")[0],
      temporality:dateRange.toLocaleLowerCase()
    })
  };
    
  return (
    <div className="chart__container">
      <ChartTopBar onChange={handleSelectChange} />
      <ResponsiveContainer width="100%" height={isMobile ? '60%' : '80%'}>
        {sales.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px', fontSize: '16px', color: '#888' }}>
            No hay datos disponibles
          </div>
        ) : (
          <AreaChart data={sales}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="1.43%" stopColor="rgba(172, 172, 172)" stopOpacity={0.8} />
                <stop offset="75%" stopColor="rgba(28, 104, 170)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="grouped_date" axisLine={false} tickLine={false} hide={isMobile} />
            <YAxis
              dataKey="total"
              axisLine={false}
              tickLine={false}
              domain={[0, maxTickValue + 1000]}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <CartesianGrid vertical={false} strokeDasharray="4" horizontal={!isMobile} />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="rgba(0, 118, 184, 1)" strokeWidth="3.75" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        )}
      </ResponsiveContainer>
      {isMobile && (
        <a
          href="#"
          style={{
            color: 'rgba(0, 73, 146, 1)',
            fontWeight: 500,
            fontSize: '22px',
            alignSelf: 'center',
          }}
        >
          Ver detalle
        </a>
      )}
    </div>
  );
  
}

