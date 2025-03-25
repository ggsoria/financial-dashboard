import React from 'react'
import { PerformanceIndicator } from '../PerformanceIndicator/PerformanceIndicator';
import { CustomSelect } from '../Utils/CustomSelect';

interface CustomChartTopBarProps {
  onChange: (value: string) => void; 
}


export const ChartTopBar = ({onChange}: CustomChartTopBarProps) => {
  return (
    <div className='chart-top-bar__container'>
        <div className='chart-top-bar__title'>
            <div>Grafico finanzas</div>
            <PerformanceIndicator />
        </div>
        <div className='chart-top-bar__select'>
          <CustomSelect onChange={onChange} />
        </div>
    </div>
  )
}
