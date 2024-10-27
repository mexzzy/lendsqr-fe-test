import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SidebarController from './components/SidebarController'

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
      <Navbar/>

      <div className="flex">
        <Sidebar/>
        <SidebarController/>
      </div>
    </div>
  )
}

export default Dashboard