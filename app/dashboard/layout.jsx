import React from 'react'
import Sidebard from '../ui/dashboard/sideBar/Sidebard'
import style from "@/app/ui/dashboard/sideBar/sidebar.module.css"
import Navbar from "@/app/ui/navbar/Navbar"
import Dashboard from '../ui/dashboard/Dashboard'

const layout = ({children}) => {
  return (
    <div className={style.layoutOfDashBoard}>
      <div  className={style.sideMenu} >
    <Sidebard/>
    </div>
    <div className={style.navbarDashboard}>
     <Navbar/>
   {children}
    </div>
    </div>

  )
}

export default layout