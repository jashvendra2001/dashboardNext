import React from 'react'
import style from "./add.module.css"
const Add = () => {
  return (
    <div className={style.container}>
        <form action="" className={style.form}>
            <input type="text" name="username"  placeholder='username' required />
            <input type="email" name="email" placeholder='Email' />
            <input type="password" name="password" placeholder="password"  />
            <input type="phone" name="phone" placeholder='phone number' />
            <select name= "IsAdmin" id="IsAdmin">
                <option value={false}>IsAdmin?</option>
                <option value={true}>Admin</option>
                <option value={false}>No Admin</option>


            </select>

            <select name="isActive" id="isActive">
                <option value={true}>Is Active?</option>
                <option value={true}>true</option>
                <option value={false}>No</option>

            </select>
            <textarea name="address" id="address" rows="16" placeholder="address"></textarea>
            <button >Submit</button>
        </form>
    </div>
  )
}

export default Add