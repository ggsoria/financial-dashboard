import React from 'react'
import { PerformanceIndicator } from '../PerformanceIndicator/PerformanceIndicator';
import { CustomSelect } from '../Utils/CustomSelect';

export const ChartTopBar = () => {
  return (
    <div className='chart-top-bar__container'>
        <div className='chart-top-bar__title'>
            <div>Grafico finanzas</div>
            <PerformanceIndicator />
        </div>
        <div className='chart-top-bar__select'>
        <CustomSelect />
        </div>
    </div>
  )
}
