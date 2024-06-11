

import React from 'react'
import style from "./Product.module.css"
import Link from 'next/link'
import fetchUser from '@/app/lib/data'



const Product = async() => {

    const data=await fetchUser()
    console.log(data)





  return (
    <div>

        <Link href="/dashboard/product/userProduct">
        <button >add New</button>
        </Link>
       

        <table className={style.container}>
            <thead>
                <tr>
                <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Action</td>

                </tr>
            </thead>
            <tbody>

        {


data.map((item)=>{

    return(

        <tr>
        <td>
           {item.username}
        </td>
        <td>
        jschauhan2001@gmail.com
        </td>

        <td>
        8-6-2024
        </td>
        <td>
            admin
        </td>
        <td>
            pending
        </td>
        <td>
            <Link href="/dashboard/product/productview">
            <button>view</button>
            </Link>
            
            <button>Delete</button>
        </td>
        
    </tr>
    )

})
        }
        
           
               
                
                
           

            </tbody>
   

        </table>
    </div>
  )
}

export default Product