import React from 'react'
import stylefoot from "./Footer.module.css"



export const Footer = () => {
  return (
    <div className={stylefoot.footermaindiv}>
   
               {/* 1st div */}
     <div className={stylefoot.secondfooter}>
   
      <div className={stylefoot.divone}>
        <ul>
            <li style={{marginBottom:"5px"}}><h2>MOST POPULAR CATEGORIES</h2></li>
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Fruits & Vegetables</li>
            <li>Baby Care</li>
            <li>Snacks & Branded Foods</li>
            <li>Dairy & Bakery</li>
        </ul>
      </div>


      <div className={stylefoot.divone}>
      <ul>
            <li style={{marginBottom:"5px"}}><h2>CUSTOMER SERVICES</h2></li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation and return policy</li>

        </ul>
      </div>



      <div className={stylefoot.contactfooterdiv}>
         <h2> CONTACT US</h2>
           <div>
            WhatsApp us : <span style={{color:"#008ecc"}}>70003 700003</span>
           </div>

           <div>
            Call us : <span style={{color:"#008ecc"}}>1800 890 1222</span>
           <p> 8:00Am to 8:00PM, 365 days</p>
           </div>

           <div>
          <p style={{fontSize:"13px"}} > Please note that you are accessing the BETA Version of <span style={{color:"#008ecc", fontSize:"13px"}}>www.jiomart.com</span></p>
           </div>

           <div>
          <p style={{fontSize:"13px"}} >Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on  <span style={{color:"#008ecc", fontSize:"13px"}}>cs@jiomart.com</span></p>
           </div>

      </div>


     </div>


   <div className={stylefoot.lastdivfooter}>

    <div>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</div>
    <div>© 2022 All rights reserved. Reliance Retail Ltd.</div>


   </div>

     </div>
  )
}