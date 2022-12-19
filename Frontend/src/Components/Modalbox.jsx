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
  } from '@chakra-ui/react'

function Modalbox() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} width="100%" bg="blue" border="none" cursor="pointer" color="white" _hover="none" >CREDIT /DEBIT /ATM CARD</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Card</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <div>
                     <input type="number" placeholder='Card number' />
                </div>
                <div>
                    <label htmlFor="">Expiry date</label><br/>
                    <input type="month" /><br/>
                </div>
                <div>
                    <input type="number" placeholder='CVV code' />
                </div>
                <div>
                    <input type="text" placeholder='Name on the card' />
                </div>
                <div>
                    <button id="payamount">Sumbit</button>
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