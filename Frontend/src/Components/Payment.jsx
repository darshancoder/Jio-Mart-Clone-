import React from 'react'
import "./Payment.css"
import {AiFillBackward} from "react-icons/ai"
import { Upi } from './Upi'
import { Cashon } from './Cashon'
import { Modalbox } from './Modalbox'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Accordination } from './Accordination'
export const Payment = () => {
    let localdata=JSON.parse(localStorage.getItem("alldata")) || []
    let mrp=100
    let price=0
    localdata.forEach((el)=>{
        // mrp+=+el.mrp
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
         <h4 id='offerid'>Offer</h4>
        <div>
            <div className='offerinside'>
                <div >
                <img  src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/offer/AUBank.jpeg" alt="" />
                </div>
                <div>
                <p>10% Cashback. Min. Txn Rs. 1000/- Max Cashback Up to Rs. 500/- on AU Debit & Credit Cards T&C</p>
                </div>
            </div>
            <div className='offerinside'>
                <div >
                <img  src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/paytm_offer_logo.svg" alt="" />
                </div>
                <div>
                <p>Get up to Rs. 500 Cashback on using Paytm on JioMart for Min. Txn of Rs 1000. Min assured ... T&C</p>
                </div>
            </div>
            <Accordination/>
        </div>
          <hr /> 
        <div id='paymentpagemiddle'>
            <div>
                <p>Amount Payable</p>
                <h3>₹ {price-25}</h3>
                <hr />
            </div>
            <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab  _selected={{ color: 'white', bg: 'red' }}>
     UPI
    </Tab>
    <Tab  _selected={{ color: 'white', bg: 'red' }}>
      Cash On Delivery
    </Tab>
    <Tab  _selected={{ color: 'white', bg: 'red' }}>ATMCARD</Tab>
  </TabList>
  <TabPanels>
    <TabPanel  >
    <Upi/>
    </TabPanel>
    <TabPanel >
      <Cashon/>
               
    </TabPanel>
    <TabPanel >
            <Modalbox/>
                
    </TabPanel>
  </TabPanels>
</Tabs>
            {/* <div className='phonepayjio'>
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
            </div> */}
        </div>
    </div>
    <div id='paymentbottom'>
        <h5>We Support</h5>
        <img src="https://myjio-rl-prod.jioconnect.com/jiopay-pgapp/images/logo_card_desktop.svg" alt="" />
    </div>

    </>
  )
}
