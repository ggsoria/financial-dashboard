import React from 'react'
import { GoShieldCheck } from "react-icons/go";
import { PiUserCirclePlus } from "react-icons/pi";
import './InfoCards.css'
import { PerformanceIndicator } from '../PerformanceIndicator/PerformanceIndicator';

export const InfoCards = ( ) => {
  return (
    <div className='cards__container'>
        <div className='card'>
            <div className='card__icon-container'> < PiUserCirclePlus size={37} color='rgba(0, 73, 146, 1)'/></div>
            <div className='card__info-container'>
                <div className='card__value'>12</div>        
                <div className='card__title'>Clientes nuevos</div>
                <div className='card__performance-container'>
                    <PerformanceIndicator />
                    <div className='card__performance-date'>Ultimos 30 dias</div>
                </div>            
            </div>
        </div>
        <div className='card'>
            <div className='card__icon-container'> < GoShieldCheck size={37} color='rgba(0, 73, 146, 1)'/></div>
            <div className='card__info-container'>
                <div className='card__value'>10</div>        
                <div className='card__title'>Garantias vendidas</div>
                <div className='card__performance-container'>
                    <PerformanceIndicator />
                    <div className='card__performance-date'>Ultimos 30 dias</div>
                </div>
            </div>
        </div>
    </div>

  )
}
