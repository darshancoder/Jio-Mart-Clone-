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
    useDisclosure
  } from '@chakra-ui/react';
  import React from 'react';
function Viewall() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='blue'  onClick={onOpen}  backgroundColor="blue"  border="none"  >
          View All
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Select Coupon</DrawerHeader>
  
            <DrawerBody>
              <h1>Coupons</h1>
              <input type="radio" />
              <label htmlFor="">
              <label htmlFor="">SAVE 150</label>
                <p>Flat 150 off on Minimum purchase of 999 (Only for Selected Fashion products)</p>
              </label>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export {Viewall}