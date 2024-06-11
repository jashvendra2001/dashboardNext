

"use client"

import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import style from "@/app/ui/navbar/navbar.module.css"
import { CiGlobe } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const urlpath=usePathname();
    console.log(urlpath.split("/").pop())
  return (
    <div className={style.container}>
        <div className={style.title}>{urlpath.split("/").pop()}</div>
        <div className={style.menu}>
            <div className={style.search}>
            <IoSearchSharp />
            <input type="text" />

            </div>

            <div className={style.icons}>
            <MdMessage />
            <CiGlobe />
            <FaRegUser />
            </div>

        </div>

    </div>
  )
}

export default Navbar