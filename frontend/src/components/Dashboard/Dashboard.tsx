import React from 'react'
import "./Dashboard.css";
import { InfoCards } from '../Cards/InfoCards';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__header'>
          <div className='dashboard__overline'>Hola Usuario 1</div>
          <div className='dashboard__title'>¿Qué hacemos hoy?</div>
        </div>
        <div className='dashboard__news'>
          <InfoCards />
        </div>
        <div className='dashboard__chart-content'></div>
        <div className='dashboard__stats-container'></div>
      </div>
    </div>

  )
}
