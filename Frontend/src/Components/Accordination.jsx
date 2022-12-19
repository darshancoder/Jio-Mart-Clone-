import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
export const Accordination = () => {
  return (
    <div id='accordion'>
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton border="none" bg="white" >
        <Box as="span" flex='1' textAlign='left' fontWeight="bold"  >
          Show More
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className='offerinside'>
                <div >
                <img  src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/offer/mobikwik_logo.svg" alt="" />
                </div>
                <div>
                <p>Get flat 5% Cashback up to Rs. 50 on minimum purchase amount of Rs. 750. T&C</p>
                </div>
            </div>
            <div className='offerinside'>
                <div >
                <img  src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/offer/mobikwik_logo.svg" alt="" />
                </div>
                <div>
                <p>Get flat Rs.100 Cashback on minimum purchase amount of Rs. 2000. T&C</p>
                </div>
            </div>
            <div className='offerinside'>
                <div >
                <img  src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/wallet/twid_icon.svg" alt="" />
                </div>
                <div>
                <p>10% Cashback up to Rs. 75 for new users + 10X Rewards for all users. Min Txn Rs. 399 T&C</p>
                </div>
            </div>
           
            <div className='offerinside'>
                <div >
                <img  src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/wallet/simpl.svg" alt="" />
                </div>
                <div>
                <p>5% cashback on first ever transaction through Simpl up to â¹ 750/ T&C</p>
                </div>
            </div>
            
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
    </div>
  )
}
