import React, { useState } from 'react'
import './Sidebar.css'
import { SidebarItems } from './SidebarItems'
import { IoMdNotificationsOutline, IoMdMenu } from "react-icons/io";
import { MdLogout } from "react-icons/md";


export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('Inicio')

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  }

    return (
    <>
    <div className="topbar">
      <div className="topbar__logo">|||| LOGO EMPRESA</div>
      <IoMdMenu size={30} color="rgba(0, 73, 146, 1)" className="topbar__menu-icon" />
    </div>

      <div className="sidebar">
        <div className='sidebar__header'>
          <div className='header__title'>|||| LOGO EMPRESA</div>
          <IoMdNotificationsOutline size={24} color='white'/>
        </div>

        <ul className='sidebar__list'>        
          {SidebarItems.map((item, key) => {
            return(
              <li className={activeItem === item.name ? 'list__row--active' : 'list__row'} key={key} onClick={() => handleItemClick(item.name)}> 
                <div id='icon' className={activeItem === item.name ? 'row__icon--active' : 'row__icon'}>{item.icon}</div>
                <div className={activeItem === item.name ? 'row__text--active' : 'row__text'}>{item.name}</div>
              </li>
            )
          })}
        </ul> 

        <div className='sidebar__footer'>
          <div className='footer__items'>
            <div id='icon'><MdLogout size={24} color='white'/></div>
            <div className='footer__text'>Cerrar sesion</div>
          </div>
        </div>
      </div>
    </>
  )
}
