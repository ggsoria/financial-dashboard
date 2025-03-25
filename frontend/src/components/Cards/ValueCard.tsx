import React from 'react'
import { CustomSelect } from '../Utils/CustomSelect'
import './ValueCard.css'

export const ValueCard = () => {
  return (
    <div className='value-card__container'>
        <div className='value-card'>
            <CustomSelect />
            <div className='value-card-title'>Concepto de valor</div>
            <div className='value-card-value'>
              $700.000
              <div className='value-card-description'>Texto de referencia de valor</div>
            </div>
            <button className='value-card-button'>Ver detalle</button>
        </div>
    </div>
  )
}
