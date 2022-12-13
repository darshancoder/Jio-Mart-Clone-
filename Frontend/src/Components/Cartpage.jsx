import React from 'react';
import "./Cartpage.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsFillCartFill} from "react-icons/bs"
import {CiMemoPad} from "react-icons/ci"
import {MdPayment} from "react-icons/md"
import { Viewall } from './Applycoupon';
import {CiPercent} from "react-icons/ci"
function Cartpage(props) {
    let localdata=JSON.parse(localStorage.getItem("alldata")) || []
    return (
        <>
            <div id="cartpagemain">
                <div id='cartpageleft'>
                <h2>Fashion Basket</h2>
                    {
                        localdata.length>0 && localdata.map((el)=>{
                            return (
                                <div id='localid'>
                                   
                                     <div>
                                        <img src={el.imageurl} alt="" />
                                     </div>
                                     <div>
                                        <div><h3>{el.name}</h3></div>
                                        <div id='pricediv'>
                                            <div><h5>{el.price}</h5></div>
                                            <div><p>{el.mrp}</p></div>
                                            <div>
                                                <p>You Save {el.mrp-el.price}</p>
                                            </div>
                                        </div>
                                        <div></div>

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
                            <div>
                               <button id='viewall'>
                                <Viewall/>
                               </button>
                            </div>
                        </div>
                        <div id='inputfield'>
                            <div>
                                <CiPercent size={25} />
                            <input type="text" placeholder='Enter Coupon Code Here' />
                            </div>
                            <div>
                                <button id='apply'>Apply</button>
                            </div>
                        </div>
                    </div>
                        <h2 id='payment'>Payment Details</h2>
                    <div id='rightbottom'>
                        <div className='details'>
                            <div>
                            <h4>MRP Total</h4>
                            </div>
                            <div>
                                price
                            </div>
                            
                        </div>
                        <div className='details'>
                        <div>
                            <h4>Product Discount</h4>
                            </div>
                            <div>
                                price
                            </div>
                        </div>
                        <div className='details'>
                        <div>
                            <h4>Total Amount</h4>
                            </div>
                            {/* <hr /> */}
                            <div>
                                price
                            </div>
                        </div>
                        
                       
                    </div>
                    <button id='placeorder' >Place order</button>
                </div>
            </div>
            
        </>
    );
}

export default Cartpage;