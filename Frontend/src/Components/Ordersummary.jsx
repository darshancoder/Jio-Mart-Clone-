import React from 'react';
import "./Cartpage.css"
import "./Ordersummary.css"

import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsFillCartFill} from "react-icons/bs"
import {CiMemoPad} from "react-icons/ci"
import {MdPayment} from "react-icons/md"
import { Viewall } from './Applycoupon';
import {CiPercent} from "react-icons/ci"
import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai"
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Change } from './Changeaddress';

import {
   Radio
  } from '@chakra-ui/react'
import { useEffect } from 'react';
function Ordersummary(props) {
    let localdata=JSON.parse(localStorage.getItem("alldata")) || []
    let [count,setcount]=useState(1)

    let handleincrease=()=>{
        setcount(count+1)
    }
    let handlereduce=()=>{
        setcount(count-1)
    }
   
    let price=0
    localdata.forEach((el)=>{
        // mrp+=+el.mrp
        price+=+el.price

    })
    let main=price-25
    let [viewall,setviewall]=useState(false)
    let handlestate=(state)=>{
        setviewall(true)
       
    }
    let [input,setinput]=useState("")
    let [inputdis,setinputdis]=useState(false)
    let handleclick=()=>{
        if(input=="masai1"){
            setinputdis(true)
            setinput("")
        }
        // alert("Invalid Coupon Code Please Enter Correct Coupon")
      
    }
    let address=JSON.parse(localStorage.getItem("address")) ||[]
    let add=address[address.length-1]
    console.log(add)
    let [radio,setradio]=useState(false)
    
    const navigate = useNavigate();
    let handlemakepayment=()=>{
        navigate("/payment")
    }

    useEffect(()=>{
        console.log("mianpagerender")
    },[address])
    return (
        <>
           <h3 id='deliveryadd'>Select Delivery Address</h3>
            <div id="cartpagemain">
               <div id='cartpageleftmain'>
                {
                    address.length>0 ?
                <div>
                    <div className='houseno'>
                    <Radio value={radio} defaultChecked={true} >Address</Radio>
                        
                    </div>
                    <div>
                      <h4 className='houseno'>{address[address.length-1].name},</h4>
                      <p className='houseno'>{address[address.length-1].houseno},</p>
                      {/* <p className='houseno'>{address[address.length-1].floorno},</p> */}
                      <p className='houseno'>{address[address.length-1].apartmentno},</p>
                      <p className='houseno'>{address[address.length-1].landmark},</p>
                      <p className='houseno'>{address[address.length-1].city},</p>
                      <p className='houseno'>{address[address.length-1].address},</p>
                      <p className='houseno'>{address[address.length-1].pin},</p>
                      <h4 className='houseno'>{address[address.length-1].phoneno}.</h4>
                    </div>

                  <div>
                    {
                        address.length>0? <button id='default'>Default Address</button>:""
                    }
                  </div>
                </div>:""
                }
                <div id='cartpageleftmainright'>
                    <div></div>
                   
                    <div></div>
                    <div>
                    <Change/>
                    </div>
                </div>
               </div>
                <div>
                    <div id='rightfirst'>
                        <div >
                        <BsFillCartFill  size={30} color="blue"/>
                        Cart
                        </div>
                        <div >
                        <CiMemoPad  size={30}/>
                        Order Summary
                        </div>
                        <div >
                        <MdPayment size={30}/>
                        Payment
                        </div>
                    </div>
                  <div></div>
                        <h2 id='payment'>Payment Details</h2>
                    <div id='rightbottom'>
                        <div className='details'>
                            <div>
                            <h4>MRP Total</h4>
                            </div>
                            <div>
                           <h4> ₹ {localdata.length*100}/-</h4>
                            </div>
                            
                        </div>
                        <div className='details'>
                        <div>
                            <h4>Product Discount</h4>
                            </div>
                            <div>
                           <h4> ₹ {localdata.length*100-price-25}/-</h4>
                            </div>
                        </div>
                        {
                            viewall?
                        <div className='details'>
                            <div>
                            <h4>Coupon Discount</h4>
                            </div>
                           
                            <div>
                           <h4> ₹ {25}/-</h4>
                            </div>
                        </div>: ""
                        }

{
                            inputdis?
                        <div className='details'>
                            <div>
                            <h4>Favorite Coupon Discount</h4>
                            </div>
                           
                            <div>
                           <h4> ₹ {25}/-</h4>
                            </div>
                        </div>: ""
                        }
                        
                        <div className='details'>
                            <div>
                            <h4>Total Amount</h4>
                            </div>
                           
                            <div>
                           {
                            viewall || inputdis?
                            <h4>₹{main-25}/-</h4>:
                            <h4> ₹{price-25}/-</h4>
                           }
                            </div>
                        </div>
                    
                        
                       
                    </div>
                    <button id='placeorder'onClick={handlemakepayment} >Make Payment</button>
                </div>
            </div>
            
        </>
    );
}

export default Ordersummary;