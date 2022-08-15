import React from 'react'
import {LineStyle,Timeline,TrendingUp} from '@mui/icons-material';

const Dashbord = () => {
  return (
    <div className="sidebar-menu">
    <h3 className="sidebar-title">dashboard</h3>
    <ul className='sidebar-list'>
        <li className='sidebar-list-item active'>
            <LineStyle className='sidebar-icon'/>
            Home
 
        </li>

        <li className='sidebar-list-item'>
            <Timeline />
            Analytics
 
        </li>

        <li className='sidebar-list-item'>
            <TrendingUp/>
            Sales
 
        </li>

    </ul>
</div>

  )
}

export default Dashbord