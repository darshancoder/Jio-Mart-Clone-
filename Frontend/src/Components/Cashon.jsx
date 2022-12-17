import { Fade, ScaleFade, Slide, SlideFade,Button,useDisclosure,Collapse,Box, Radio } from '@chakra-ui/react'
import { useState } from 'react'
function Cashon() {
    const { isOpen, onToggle } = useDisclosure()
    let init={
        phone:"",
        google:"",
        otherupi:"",
        jio:""
    }
     let [phonepay,setphonepay]=useState(init)
     let handlechange=(e)=>{
        setphonepay(
            ...phonepay,
            e.target.value
    )
    console.log(phonepay)
     }
    return (
      <>
        <Button textAlign="left" width="100%" bg="blue" border="none" cursor="pointer" color="white" _hover="none"  onClick={onToggle}>Cash On Delivery</Button>
        <Collapse  in={isOpen}  animateOpacity>
            <h4>Pay Using Cash On Delivery</h4>
            <hr />
      <div className='upiradio'>
        <div>
            <input  name='name' value="phone" type="radio" onChange={handlechange} />

            <label htmlFor="">Cash On Delivery</label>
        </div>
       
        <div>
           
        </div>
        <div>
            
        </div>
        <div>

        </div>
      </div>
      <hr />
     

      <button id='payamount'>Pay Amount</button>
        </Collapse>
      </>
    )
  }

  export {Cashon}