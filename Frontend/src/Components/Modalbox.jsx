import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Modalbox() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let init={
      cardnumber:"",
      expiry:"",
      cvv:"",
      name:""
    }
    let [states,setstates]=useState(init)

    let handlechange=(e)=>{
      let {value,name}=e.target
    setstates({
      ...states,
      [name]:value
    })
    }

    let isErrorcard=states.cardnumber===""
    let isErrorexpiry=states.expiry===""
    let isErrorname=states.name===""
    let isErrorcvv=states.cvv===""
    let navigate=useNavigate()
    let handlesubmit=()=>{
      navigate("/success")
    }
    return (
      <>
        <Button onClick={onOpen} width="100%" bg="blue" border="none" cursor="pointer" color="white" _hover="none" >CREDIT /DEBIT /ATM CARD</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Card</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

            <FormControl isInvalid={isErrorcard}>
      <FormLabel>Card Number</FormLabel>
      <Input type='number' name="cardnumber" value={states.cardnumber} placeholder="Enter Card Number" onChange={handlechange}  htmlSize={18} width="auto" />
      {!isErrorcard ? (
        <FormHelperText>
          Enter the Card Number you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Card Number is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isErrorexpiry}>
      <FormLabel>Expiry Date</FormLabel>
      <Input type='month' name="expiry"  value={states.expiry} onChange={handlechange}  htmlSize={18} width="auto" />
      {!isErrorexpiry ? (
        <FormHelperText>
          Enter the Card Number you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Expiry Date is required.</FormErrorMessage>
      )}
    </FormControl>

    <FormControl isInvalid={isErrorcvv}>
      <FormLabel>CVV code</FormLabel>
      <Input type='number' name="cvv" placeholder='Enter CVV Code' value={states.cvv} onChange={handlechange}  htmlSize={18} width="auto" />
      {!isErrorcvv ? (
        <FormHelperText>
          Enter the CVV Code you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>CVV Code is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={isErrorname}>
      <FormLabel>Name on the card</FormLabel>
      <Input type='text' name="name" value={states.name} placeholder='Name on the card' onChange={handlechange} htmlSize={18} width="auto" />
      {!isErrorname ? (
        <FormHelperText>
          Enter the Name on the card you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>CVV Code is required.</FormErrorMessage>
      )}
    </FormControl>
              
                <div>
                    <button onClick={handlesubmit} id="payamount" disabled={isErrorcard==true || isErrorcvv==true || isErrorexpiry==true || isErrorname==true} >Sumbit</button>
                </div>

            </ModalBody>
  
            <ModalFooter>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button> */}
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export {Modalbox}