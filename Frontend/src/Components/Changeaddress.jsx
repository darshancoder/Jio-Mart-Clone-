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
    FormLabel,
    FormHelperText,
    FormErrorMessage
  } from '@chakra-ui/react';
  import React from 'react';
  import "./Changeaddresss.css"
import { useState } from 'react';
import { Saveaddress } from './Saveaddress';
import { useEffect } from 'react';
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

    useEffect(()=>{
      // console.log("thjeaswarpdifdf")
    },[states,address])
   let isError=states.pin===""
   let isErrorhouseno=states.houseno===""
   let isErrorapartmentno=states.apartmentno===""
   let isErroraddress=states.address===""
   let isErrorlandmark=states.landmark===""
   let isErrorcity=states.city===""
   let isErrorname=states.name===""
   let isErrorphone=states.phoneno===""


   console.log(isError)

   console.log(isErrorhouseno)
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
              {/* <FormControl isRequired>
  <Input placeholder='Pin Code *'type="number" name='pin' value={states.pin} onChange={handlechange} />
</FormControl> */}
 <FormControl isInvalid={isError}>
      <FormLabel>Pin Code</FormLabel>
      <Input type='number' name="pin" value={states.pin} onChange={handlechange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>House Number is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={isErrorhouseno}>
      <FormLabel>Flat No/House No</FormLabel>
      <Input type='number' name="houseno" value={states.houseno} onChange={handlechange} />
      {!isErrorhouseno ? (
        <FormHelperText>
          Enter the houseno you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Pin code is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isErrorapartmentno}>
      <FormLabel>Apartment name</FormLabel>
      <Input type='text' name="apartmentno" value={states.apartmentno} onChange={handlechange} />
      {!isErrorapartmentno ? (
        <FormHelperText>
          Enter the apartment name you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Apartment name is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isErroraddress}>
      <FormLabel>Address</FormLabel>
      <Input type='text' name="address" value={states.address} onChange={handlechange} />
      {!isErroraddress ? (
        <FormHelperText>
          Enter the Address you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Address is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isErrorlandmark}>
      <FormLabel>Landmark</FormLabel>
      <Input type='text' name="landmark" value={states.landmark} onChange={handlechange} />
      {!isErrorlandmark ? (
        <FormHelperText>
          Enter the Landmark you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Landmark is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isErrorcity}>
      <FormLabel>State</FormLabel>
      <Input type='text' name="city" value={states.city} onChange={handlechange} />
      {!isErrorcity ? (
        <FormHelperText>
          Enter the State you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>State is required.</FormErrorMessage>
      )}
    </FormControl>

   

    
{/* <FormControl isRequired>
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
</FormControl> */}

<h3>Delivery Contact Details</h3>
<FormControl isInvalid={isErrorname}>
      <FormLabel>Name</FormLabel>
      <Input type='text' name="name" value={states.name} onChange={handlechange} />
      {!isErrorname ? (
        <FormHelperText>
          Enter the Name you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isErrorphone}>
      <FormLabel>Mobile Number</FormLabel>
      <Input type='number' name="phoneno" value={states.phoneno} onChange={handlechange} />
      {!isErrorphone ? (
        <FormHelperText>
          Enter the Phine Number you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Mobile Number is required.</FormErrorMessage>
      )}
    </FormControl>
{/* <FormControl isRequired>
  <Input my={3} name="name"  placeholder='name *'type="text" value={states.name}  onChange={handlechange}  />
</FormControl>
<FormControl isRequired>
  <Input my={3} name="phoneno"  placeholder='Phone No *'type="number" value={states.phoneno}  onChange={handlechange} />
</FormControl> */}
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

            <button id='addresssave' disabled={isError==true || isErroraddress==true || isErrorapartmentno==true||isErrorcity==true || isErrorhouseno==true||isErrorlandmark==true|| isErrorname==true||isErrorphone==true} onClick={handlesave}>
              {/* <Saveaddress/> */}
              Saveaddress
            </button>
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