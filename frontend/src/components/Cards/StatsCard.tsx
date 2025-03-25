import React, { useEffect } from 'react'
import './StatCards.css'
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const statIcons = {
    positive:<FaArrowUp size={38} color="rgba(0, 172, 79, 1)"/>,
    negative:<FaArrowDown size={38} color="rgba(232, 35, 35, 1)"/>,
}

export const StatsCard = () => {
  return (
    <div className='statcards__container'>
    <div className='statcard'>
        <div className='statcard__info-container'>
            <div className='statcard__title'>Valor positivo</div>        
            <div className='statcard__value'>$700.000 ARS</div>
        </div>
        <div className='statcard__icon'>
            {statIcons.positive}
        </div>
    </div>
    <div className='statcard'>
        <div className='statcard__info-container'>
            <div className='statcard__title'>Valor positivo</div>        
            <div className='statcard__value'>$3.400 USD</div>
        </div>
        <div className='statcard__icon'>
            {statIcons.positive}
        </div>
    </div>
    <div className='statcard'>
        <div className='statcard__info-container'>
            <div className='statcard__title'>Valor negativo</div>        
            <div className='statcard__value'>$230.000 ARS</div>
        </div>
        <div className='statcard__icon'>
            {statIcons.negative}
        </div>
    </div>
    <div className='statcard'>
        <div className='statcard__info-container'>
            <div className='statcard__title'>Valor negativo</div>        
            <div className='statcard__value'>$1.200 USD</div>
        </div>
        <div className='statcard__icon'>
            {statIcons.negative}
        </div>
    </div>
    </div>
    
  )
}