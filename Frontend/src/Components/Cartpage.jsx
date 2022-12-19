import React from 'react';
import "./Cartpage.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsFillCartFill} from "react-icons/bs"
import {CiMemoPad} from "react-icons/ci"
import {MdPayment} from "react-icons/md"
import { Viewall } from './Applycoupon';
import {CiPercent} from "react-icons/ci"
import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Cartpage(props) {
    let localdata=JSON.parse(localStorage.getItem("alldata")) || []
    let [count,setcount]=useState(1)

    let handleincrease=()=>{
        setcount(count+1)
    }
    let handlereduce=()=>{
        setcount(count-1)
    }
    let mrp=100
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
    let navigate=useNavigate()
    let onplace=()=>{
        navigate("/ordersummary")
    }
    return (
        <>
            <div id="cartpagemain" >
                <div id='cartpageleft'>
                <h3 id='fashionbasket'>Fashion Basket ({localdata.length} Items)  </h3>
                    {
                        localdata.length>0 && localdata.map((el)=>{
                            return (
                                <div id='localid'>
                                   <div>
                                    <img src={el.image} alt="" />
                                   </div>
                                   <div id='localidright'>
                                    <div>
                                        <h4 id='nameid'>{el.title}</h4>
                                    </div>
                                    <div id='pricediv'>
                                        <div>
                                        <h4 id='priceid'>₹{el.price}</h4>
                                        </div>
                                        <div>
                                            <p id='mrpid' > ₹{100}</p>
                                        </div>
                                        <div>
                                            <p id='saveid'>You Save ₹{100-el.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {/* <h4 id='sizeid'>
                                            Size:L
                                        </h4> */}
                                    </div>
                                    <div id='finalbutton'>
                                        <div>
                                        <p>SAVE FOR LATER</p>
                                        </div>
                                        {/* <div id='increasingbutton'>
                                            <div>
                                                <button disabled={count==0} onClick={handlereduce}>-</button>
                                            </div>
                                            <div>
                                                <button>{count}</button>
                                            </div>
                                            <div>
                                                <button disabled={count==3} onClick={handleincrease}>+</button>
                                            </div>
                         </div> */}
                                    </div>
                                   </div>
                                </div>
                            )
                        })
                    }
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
                    <div  id='rightmiddle' >
                        
                        <div id='applycoupon' >
                            <div>
                                <h2 id='couponapply'>Apply Coupon</h2>
                            </div>
                            {inputdis?
                        "":
                            <div>
                               <button id='viewall'>
                                <Viewall handlestate={handlestate} disabled={inputdis==true} />
                               </button>
                            </div>
}
                        </div>
                        

                        {
                            viewall?"":
                        
                        <div id='inputfield'>
                           
                            <div>
                                <CiPercent size={25} />
                               
                            <input type="text" placeholder='Enter Coupon Code Here' value={input} onChange={(e)=>setinput(e.target.value)}  />
                            </div>
                            <div>
                                <button id='apply' onClick={handleclick}>Apply</button>
                            </div>

                        </div>
}
                    </div>
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
                           <h4> ₹ {localdata.length*100-price}/-</h4>
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
                            <h4>₹{main}/-</h4>:
                            <h4> ₹{price}/-</h4>
                           }
                            </div>
                        </div>
                    
                        
                       
                    </div>
                    <button id='placeorder' onClick={onplace} >Place order</button>
                </div>
            </div>
            
        </>
    );
}

export default Cartpage;