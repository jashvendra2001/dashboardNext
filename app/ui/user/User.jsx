
"use client"


import React from 'react'
import style  from "./User.module.css"
import logo12 from "../../../images/logoimg21.png"
import Image from 'next/image'
import Link from 'next/link'

const User = () => {
  return (
    <div>
        <div >
            <Link href="/dashboard/user/add">
            <button className={style.button}>
                Add New
            </button>
            </Link>
        </div>
        <table  className={style.container}>
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
                <tr>
                    <td className={style.title}>
                        <Image src={logo12}   width={20} height={20} />
                        <span>jashvendra</span>
                    </td>
                    <td>
                        <span>jschauhan2001@gmai.com</span>
                    </td>
                    <td>
                        <span>8-6-2024</span>
                    </td>
                    <td>
                        <span>Admin</span>
                    </td>
                    <td>
                    Active
                    </td>
                    <td className={style.btns}>
                        <Link href="/dashboard/user/12">
                        <button className={style.btn1}>view</button> 
                        </Link>
                      
                       <button className={style.btn2}>Delete</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className={style.title}>
                        <Image src={logo12}   width={20} height={20} />
                        <span>jashvendra</span>
                    </td>
                    <td>
                        <span>jschauhan2001@gmai.com</span>
                    </td>
                    <td>
                        <span>8-6-2024</span>
                    </td>
                    <td>
                        <span>Admin</span>
                    </td>
                    <td>
                    Active
                    </td>
                    <td className={style.btns}>
                       <button className={style.btn1}>view</button> 
                       <button className={style.btn2}>Delete</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className={style.title}>
                        <Image src={logo12}   width={20} height={20} />
                        <span>jashvendra</span>
                    </td>
                    <td>
                        <span>jschauhan2001@gmai.com</span>
                    </td>
                    <td>
                        <span>8-6-2024</span>
                    </td>
                    <td>
                        <span>Admin</span>
                    </td>
                    <td>
                    Active
                    </td>
                    <td className={style.btns}>
                       <button className={style.btn1}>view</button> 
                       <button className={style.btn2}>Delete</button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className={style.title}>
                        <Image src={logo12}   width={20} height={20} />
                        <span>jashvendra</span>
                    </td>
                    <td>
                        <span>jschauhan2001@gmai.com</span>
                    </td>
                    <td>
                        <span>8-6-2024</span>
                    </td>
                    <td>
                        <span>Admin</span>
                    </td>
                    <td>
                    Active
                    </td>
                    <td className={style.btns}>
                       <button className={style.btn1}>view</button> 
                       <button className={style.btn2}>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default User