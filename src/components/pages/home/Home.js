import React from 'react'
import { UserData } from '../../../data'
import Chart from '../../chart/Chart'
import Featuredinfo from '../../featuredinfo/Featuredinfo'

import './home.css'


const Home = () => {
  return (
    <div className="Home">
      <Featuredinfo/>
      <Chart  title="User Analytics"  UserData={UserData} dataKey1="uv" dataKey2="pv" dataKey3="amt"  grid/>

    </div>
  )
}

export default Home