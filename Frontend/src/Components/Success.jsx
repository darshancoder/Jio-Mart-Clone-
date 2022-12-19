import React from 'react'
import "./Success.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const Success = () => {
    let [count,setcount]=useState(1)
  let navigate=useNavigate()
  useEffect(()=>{
    let id=setInterval(() => {
        setcount((count)=>count+1)
    }, 1000);
    return ()=>clearInterval(id)
  },[count])
    useEffect(()=>{
        if(count==7){

            navigate("/")
        }
    },[count])
  return (
    <div id='successpage'>
        {
            count<=6?
            <div id='successmain'>

                {/* <h2>Cash On Delivery Successful</h2> */}
                <img  src="https://agazella.com/wp-content/uploads/2021/03/payment_successful.gif"alt="" />
            </div>
            :""
        }
    </div>
  )
}
