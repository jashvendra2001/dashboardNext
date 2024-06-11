

"use client"
import style from "./transaction.module.css"

const Transaction = () => {
  return (
   <>
   <h2 className={style.title}>Latest Transactions</h2>
    <table className={style.container}>
        <thead>
            <tr >
                <td>Name</td>
                <td>Status</td>
                <td>date</td>
                <td>Amount</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div>
                        <img src="" alt="" />
                        <span> john cena</span>
                    </div>
                </td>
                <td>
                    <div>
                        
                    pending
                    </div>
                </td>
                <td>
                
                        
                    12-jan-2024
                  
                </td>
                <td>
                    
                        
                    1240
                    
                </td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>
                    <div>
                        <img src="" alt="" />
                        <span> john cena</span>
                    </div>
                </td>
                <td>
                    <div >
                        
                    <span className={`${style.pending}   ${style.status}`}>Pending</span>
                    </div>
                </td>
                <td>
                
                        
                    12-jan-2024
                  
                </td>
                <td>
                    
                        
                    1240
                    
                </td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>
                    <div>
                        <img src="" alt="" />
                        <span> john cena</span>
                    </div>
                </td>
                <td>
                    <span className={`${style.done}   ${style.status}`}>Done </span>
                </td>
                <td>
                
                        
                    12-jan-2024
                  
                </td>
                <td>
                    
                        
                    1240
                    
                </td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>
                    <div>
                        <img src="" alt="" />
                        <span> john cena</span>
                    </div>
                </td>
                <td>
                    <div>
                        
                    pending
                    </div>
                </td>
                <td>
                
                        
                    12-jan-2024
                  
                </td>
                <td>
                    
                        
                    1240
                    
                </td>
            </tr>
        </tbody>
        
    </table>
   
   </>
  )
}

export default Transaction