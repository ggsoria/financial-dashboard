import React, { useState } from 'react'
import './CustomeSelect.css'

export const CustomSelect = () => {
    const [dataRange, setDataRange] = useState("Anual");
    const dateRanges = ["Anual", "Mensual", "Semanal", "Diario"];

    return (
        <div className='custom-select'>
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
  )
}

