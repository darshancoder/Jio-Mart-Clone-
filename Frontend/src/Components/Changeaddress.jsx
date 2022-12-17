import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Text,
    useDisclosure,
    FormControl,
    FormLabel
  } from '@chakra-ui/react';
  import React from 'react';
  import "./Changeaddresss.css"
import { useState } from 'react';
function Change({handlestate}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let [state,setstate]=useState(false)
    let handleradio=()=>{
      setstate(true)
      // console.log(state,"state")
      handlestate(state)
    }

    let initdata={
        pin:"",
        houseno:"",
        floorno:"",
        towerno:"",
        apartmentno:"",
        address:"",
        landmark:"",
        city:"",
        name:"",
        phoneno:""
    }
  let address=JSON.parse(localStorage.getItem("address")) ||[]
    let [states,setstates]=useState(initdata)

    let handlesave=()=>{
      console.log(states)
      address.push(states)
        localStorage.setItem("address",JSON.stringify(address))
        window.location.reload()
    }
    let handlechange=(e)=>{
      
        let {value,name}=e.target
        setstates({
            ...states,
            [name]:value
        })
    }
  
    return (
      <>
        <Button ref={btnRef} colorScheme='blue'  onClick={onOpen}  backgroundColor="blue"  border="none"  >
          Change/Add Address
        </Button>
        <Drawer
          isOpen={isOpen}
          size="sm"
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add Address</DrawerHeader>
  
            <DrawerBody>
              <FormControl isRequired>
  <Input placeholder='Pin Code *'type="number" name='pin' value={states.pin} onChange={handlechange} />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="houseno" placeholder='Flat/ House NO.'type="text" value={states.houseno} onChange={handlechange} />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="floorno"  placeholder='Floor No.'type="number" value={states.floorno}  onChange={handlechange}  />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="towerno"  placeholder='Tower No.'type="number" value={states.towerno}  onChange={handlechange} />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="apartmentno"  placeholder='Building/ Apartment Name'type="text" value={states.apartmentno}  onChange={handlechange} />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="address"  placeholder='Address *'type="text" value={states.address}  onChange={handlechange}  />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="landmark"  placeholder='Landmark/Area *'type="text" value={states.landmark}  onChange={handlechange}  />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="city"  placeholder='City, State *'type="text" value={states.city}  onChange={handlechange}  />
</FormControl>

<h3>Delivery Contact Details</h3>
<FormControl isRequired>
  <Input my={3} name="name"  placeholder='name *'type="text" value={states.name}  onChange={handlechange}  />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="phoneno"  placeholder='Phone No *'type="number" value={states.phoneno}  onChange={handlechange} />
</FormControl>
<p>This mobile number will receive an OTP, required for collecting the order.</p>

         <h3>Save as</h3>    
         <div id='saveas'>
            <div>
            <button>Home</button>
            </div>
            <div>
                <button>Work</button>
            </div>
            <div>
                <button>Other</button>
            </div>
            
            </div> 

            <button id='addresssave' onClick={handlesave}>Save Address</button>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              {/* <Button colorScheme='blue'>Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export {Change}