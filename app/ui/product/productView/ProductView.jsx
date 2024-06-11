import React from 'react'
import userViewImg from "@/images/logoimg21.png"
import Image from 'next/image'
import style from "./productview.module.css"

const ProductView = () => {
  return (
    <div className={style.container}>
    <div className={style.infoContainer}>
        <div className={style.imgContainer}>
            <Image src={userViewImg} width={240} /> 
        </div>
        Pradeeep sharma 
    </div>

    <div className={style.formContainer}>
    <form action=""  className={style.form}>
        
        <div className={style.userEmail}>
         <div className={style.username}>
         <label>title</label>
         <input type="text" name="title" placeholder='title'/>
            </div>   
        

        <div className={style.email}>
        <lable>
            Price
        </lable>
        <input type="number" name='price' placeholder='price' />
        </div>
        
        </div>
        
        <label>Stock</label>
        <input type="number" name="stock" placeholder="stock"/>
        <label>Phone</label>
        <input type="Phone" name="Phone" placeholder="Phone"/>
        {/* <label>Address</label>
        <textarea name="address" id="address" rows={8}></textarea> */}
        <lable>
            isAdmin
        </lable>
        <select name="isAdmin" id="isAdmin">
            <option value={true}>yes</option>
            <option value={false} >No</option>
        </select>
        <lable>
            Is Active
        </lable>

        <select name="isActive" id="isActive">
            <option value={true}>yes</option>
            <option value={false} >No</option>
        </select>
    
<button type='submit'> Update</button>

    </form>
    </div>
</div>
  )
}

export default ProductView