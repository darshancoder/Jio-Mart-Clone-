import React from 'react'
import "./Payment.css"
import {AiFillBackward} from "react-icons/ai"
import { Upi } from './Upi'
import { Cashon } from './Cashon'
import { Modalbox } from './Modalbox'
export const Payment = () => {
    let localdata=JSON.parse(localStorage.getItem("alldata")) || []
    let mrp=0
    let price=0
    localdata.forEach((el)=>{
        mrp+=+el.mrp
        price+=+el.price

    })
  return (
    <>
    <div id="paymentmainpage">
        <div>
        <AiFillBackward/>
        <a href="/ordersummary">Go Back</a>
        <hr />
        </div>
        <div id='paymentpagemiddle'>
            <div>
                <p>Amount Payable</p>
                <h3>₹ {price}</h3>
                <hr />
            </div>
            <div className='phonepayjio'>
                <div>
                <Upi/>
                </div>
                <div>
                    
                </div>
            </div>
            
            <div className='phonepayjio'>
                <div>
                <Cashon/>
                </div>
                <div>

                </div>
            </div>
            <div className='phonepayjio'>
                <div>
                <Modalbox/>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
    <div id='paymentbottom'>
        <h5>We Support</h5>
        <img src="https://myjio-rl-prod.jioconnect.com/jiopay-pgapp/images/logo_card_desktop.svg" alt="" />
    </div>

    </>
  )
}
