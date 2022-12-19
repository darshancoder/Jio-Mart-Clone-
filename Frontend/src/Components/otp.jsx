import React from 'react'
import "./Otp.css"
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export const Otp = () => {
    let navigate=useNavigate()
    let otpsubmit=()=>{
        navigate("/success")
    }


    let init={
        one:'',
        two:'',
        three:'',
        four:''
    }

    let [states,setstates]=useState(init)

    let handlechange=(e)=>{
        // console.log(e.target.value)
        let {value,name}=e.target
        setstates({
            ...states,
            [name]:value
        })
    }
    // console.log(states)

    let errorone=states.one===""
    let errortwo=states.two===""
    let errorthree=states.three===""
    let errorfour=states.four===""

    console.log(errorone,errorthree,errortwo,errorfour)
  return (
    <>
    <div id='otpproduct'>
        <h2>OTP Verification</h2>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxkK_M4MPxFXvkOBikBXzdKHYDYTbSGpg6YdJAajCmg&s" alt="" />
        </div>
        <div>
        <HStack>
  <PinInput>
    <PinInputField name='one'  value={states.one} onChange={handlechange} />
    <PinInputField name='two' value={states.two} onChange={handlechange} />
    <PinInputField name='three' value={states.three} onChange={handlechange} />
    <PinInputField name='four'  value={states.four} onChange={handlechange}/>
  </PinInput>
</HStack>
        </div>
        <div>
            <h5>Successfully Sent OTP to your Mobile Number</h5>
        </div>
        <div>
            <button id='otpbtn' onClick={otpsubmit} disabled={errorfour==true || errorone==true || errorthree==true||errortwo==true} >Submit</button>
        </div>
    </div>
    </>
  )
}
