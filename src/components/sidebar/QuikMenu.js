import React from 'react'
import {PermIdentity,Storefront,AttachMoney,Equalizer} from '@mui/icons-material';

const QuikMenu = () => {
  return (
    <div className="sidebar-menu">
    <h3 className="sidebar-title">Quik Menu</h3>
    <ul className='sidebar-list'>
        <li className='sidebar-list-item '>
            <PermIdentity className='sidebar-icon'/>
            Users
 
        </li>

        <li className='sidebar-list-item'>
            <Storefront />
            Products
 
        </li>

        <li className='sidebar-list-item'>
            <AttachMoney/>
            Transations
 
        </li>
        <li className='sidebar-list-item'>
            <Equalizer/>
            Reports
 
        </li>

    </ul>
</div>
  )
}

export default QuikMenu