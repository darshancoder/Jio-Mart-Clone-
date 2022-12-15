import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputGroup,
    InputLeftAddon,
    Stack,
    Input,
    HStack,
    Image,
    Button,
    Heading,
    Text,
    Box,
    InputRightElement,
    PinInput,
    PinInputField
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'

const Account = () => {
    const [isMobile] = useMediaQuery('(max-width: 480x)')
    const [toggle, setToggle] = React.useState(false)
    const [count, setCount] = React.useState(3)


    return (
        <Box pt={"40px"} bg={"whiteAlpha.900"} mb="0px" height={"100vh"} >
            <Heading mt={"10"} as='h1' size='md' alignItems="left">My Account</Heading>
            <Stack  ml={["5", "5", "10"]} mr={"5%"} direction={['column', 'row', 'row']} justifyContent={['space-between']}>

                <Stack w={["100%", "100%", "40%"]} h={"300px"} bg={"red"}> 
                   
                    
                </Stack>
                {isMobile ? null : <Box w={["100%", "100%", "60%"]} h={"500px"} bg={"blue"}></Box>}
            </Stack>
            <Stack w={["100%", "100%", "40%"]} h={"300px"} bg={"red"}> 
                   
                    
                   </Stack>
            <Text fontSize='xs' textAlign={"center"} marginTop="20px">By continuing you agree to our <span style={{ "color": "red" }}>Terms of service</span></Text>
            <Text fontSize='xs' mb="20px" textAlign={"center"}>and <span style={{ "color": "red" }}>Privacy & Legal Policy.</span></Text>
        </Box>

    );
}

export default Account;