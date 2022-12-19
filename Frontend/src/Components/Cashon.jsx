import { Fade, ScaleFade, Slide, SlideFade,Button,useDisclosure,Collapse,Box, Radio } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Cashon() {
    const { isOpen, onToggle } = useDisclosure()
   
     let [phonepay,setphonepay]=useState("")
     let handlechange=(e)=>{
        setphonepay(
            
            e.target.value
    )
    console.log(phonepay)
     }

     let navigate=useNavigate()

    let handlepayment=()=>{
      navigate("/success")
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
     

      <button id='payamount' disabled={!phonepay} onClick={handlepayment}>Pay Amount</button>
        </Collapse>
      </>
    )
  }

  export {Cashon}