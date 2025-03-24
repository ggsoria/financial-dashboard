import React, { useState } from 'react'
import { PerformanceIndicator } from '../PerformanceIndicator/PerformanceIndicator';

export const ChartTopBar = () => {
    const [dataRange, setDataRange] = useState("Anual");
    const dateRanges = ["Anual", "Mensual", "Semanal", "Diario"];

  return (
    <div className='chart-top-bar__container'>
        <div className='chart-top-bar__title'>
            <div>Grafico de evolucion</div>
            {/* <div className='chart-top-bar__performance'> || +2.45%</div> */}
            <PerformanceIndicator />
        </div>
        <div className='chart-top-bar__select'>
            <select
              id="dateRange"
              value={dataRange}
              onChange={(e) => setDataRange(e.target.value)}
            >
              <option value="" disabled>-- Seleccione una temporalidad --</option>
              {dateRanges.map((dateRange) => (
                <option key={dateRange} value={dateRange}>{dateRange}</option>
              ))}
            </select>
        </div>    
    </div>
  )
}
