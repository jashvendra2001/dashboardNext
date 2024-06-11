

"use client"
import style from "@/app/dashboard/card.module.css"
import Link from "next/link"

import React from 'react'

import { usePathname } from "next/navigation"



function MenuList({ data}) {

    const pathurl=usePathname();
    const pathname=pathurl.split("/").pop()

    console.log(pathurl.split("/").pop()) 
    console.log(data)
    return (
        <div>
{


data.map((item, index) => {
    return (
        <div key={index}>
            {item.list.map((i, subIndex) => {
                console.log(i.name);
                return(
            <Link href={i.navigate} className={`${style.layoutMenuItem} ${pathname===i.navigate && style.active} `} key={subIndex}>
            
            
               <div className={style.menuItemsSetting}>
               <div className={style.icons}>{i.icon}</div>
                 <div className={style.user}>{i.name}</div>
               </div>

             
            
            
            </Link>
                


                ) ;
            })}
        </div>
    );
})

}
        </div>

    )
}

export default MenuList