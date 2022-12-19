import { Fade, ScaleFade, Slide, SlideFade,Button,useDisclosure,Collapse,Box, Radio } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Upi() {
    const { isOpen, onToggle } = useDisclosure()
    
     let [phonepay,setphonepay]=useState("")
     let handlechange=(e)=>{
        setphonepay(e.target.value)
        
     }
    if(!phonepay){
      console.log("thejea")
    }
    else{
      console.log(phonepay)
    }
    let navigate=useNavigate()

    let handlepayment=()=>{
      navigate("/paymentsuccess")
    }
    return (
      <>
        <Button textAlign="left" width="100%" bg="blue" border="none" cursor="pointer" color="white" _hover="none"  onClick={onToggle}>UPI</Button>
        <Collapse  in={isOpen}  animateOpacity>
            <h4>Pay Using UPI</h4>
            <hr />
      <div className='upiradio'>
        <div>
            <input  name='name' value="phone" type="radio" onChange={handlechange} />

            <label htmlFor="">Phone Pay</label>
        </div>
       
        <div>
            <img width={30} src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/ic_phonepe-01.svg" alt="" />
        </div>
        <div>
            
        </div>
        <div>

        </div>
      </div>
      <hr />
      <div className='upiradio'>
        <div>
        <input  name='name' value="jio" type="radio" onChange={handlechange} />

<label htmlFor="">My JIO</label>
        </div>
        <div>
            <img width={30} src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/ic_jio-01.svg" alt="" />
        </div>
        <div>
            {/* <h4>My JIO</h4> */}
        </div>
        <div></div>
      </div>
      <hr />
      <div className='upiradio'>
        <div>
        <input  name='name' value="google" type="radio" onChange={handlechange} />

<label htmlFor="">Google Pay</label>
        </div>
        <div>
            <img width={30} src="https://jep-asset.akamaized.net/MyJio_Client/corefiles/jpg/ic_googlepay-01.svg" alt="" />
        </div>
        <div>
            
        </div>
        <div></div>
      </div>
      <hr />
      <div className='upiradio'>
        <div>
        <input name='name' value="otherupi" type="radio" onChange={handlechange} />

<label htmlFor="">Other UPI</label>
        </div>
        <div>
            <img width={30} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMCAzMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAgMzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDk4MDQxO30KCS5zdDF7ZmlsbDojRTk3NjI2O30KPC9zdHlsZT4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNy44MSwyIDI0LjM1LDE1IDEwLjYxLDI4ICIvPgo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjEzLjIyLDIgMTkuNzUsMTUgNiwyOCAiLz4KPC9zdmc+Cg==" alt="" />
        </div>
        <div>
           
        </div>
        <div></div>
      </div>
      <hr />
        {/* <button id='id'  disabled={!phonepay}>submit</button> */}
      <button id='payamount' disabled={!phonepay } onClick={handlepayment}>Pay Amount</button>
        </Collapse>
      </>
    )
  }

  export {Upi}