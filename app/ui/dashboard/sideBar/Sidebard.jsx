import React from 'react'
import style from "./sidebar.module.css"
import Image from 'next/image'
import logo  from "@/images/logoimg21.png"
import MenuList from '@/app/dashboard/MenuList'
import { FaUserFriends } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
const Sidebard = () => {
  const menuList=[{
    title:"dashboard",
    list:[{
      id:"1",
      name:"dashboard",
      navigate:"/dashboard",
      icon:<MdDashboard />

    },{
      id:"2",
      name:"user",
      navigate:"/dashboard/user",
      icon:<FaUserFriends />

    },{
      id:"3",
      name:"Product",
      navigate:"/dashboard/product",
      icon:<MdProductionQuantityLimits />


    }]
  }]
  return (
    <>
    <div className={style.layoutMenuList}>
    <div className={style.parents}>
        <Image src={logo} width="50" height="50" alt="logo" />
        <div class={style.container}>
            Hello 
            <br/>
            <span>
                World
            </span>
        </div>
    </div>
    <MenuList data={menuList}/>
    </div>
    </>
  )
}

export default Sidebard