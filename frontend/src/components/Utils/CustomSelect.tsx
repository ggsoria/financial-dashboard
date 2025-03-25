import React, { useState } from 'react'
import './CustomeSelect.css'

interface CustomSelectProps {
  onChange: (value: string) => void; 
}

export const CustomSelect: React.FC<CustomSelectProps> = ({onChange}) => {
    const [dataRange, setDataRange] = useState("Anual");
    const dateRanges = ["Anual", "Mensual", "Semanal", "Diario"];

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      setDataRange(selectedValue);
      onChange(selectedValue); 
    };

    return (
        <div className='custom-select'>
            <select
              id="dateRange"
              value={dataRange}
              onChange={handleOnChange}
            >
              <option value="" disabled>-- Seleccione una temporalidad --</option>
              {dateRanges.map((dateRange) => (
                <option key={dateRange} value={dateRange}>{dateRange}</option>
              ))}
            </select>
        </div>    
  )
}

