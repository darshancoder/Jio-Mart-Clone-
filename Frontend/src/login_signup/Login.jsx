import './login-banner.jpg'
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

const Login = () => {
    const [isMobile] = useMediaQuery('(max-width: 600px)')
    const [toggle,setToggle] =React.useState(false)
    const [count,setCount] =React.useState(10)

    const submit=()=>{
        setToggle(true)
        let  id=setInterval(()=>{           
             setCount(prev=>prev-1)
                if(count===0){
                    clearInterval(id)
                }
           
            
        },1000)
       
       
    }
    return (
    <Box pt={"40px"} bg="whitesmoke" mb="0px" height={"100vh"} >
        <Stack bg={"whiteAlpha.900"} ml={["5", "5", "10"]} mr={"5%"} direction={['column', 'column', 'row']} justifyContent={['space-between']}>

{isMobile ? null : <Box w={["100%", "100%", "40%"]}><Image borderLeftRadius={"2xl"} src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="login-banner" /></Box>}

<Stack w={["100%", "100%", "50%"]}>
    <Heading mt={"10"} as='h1' size='md' alignItems="left">Sign in</Heading>
    <Text fontSize={["xm", "sm"]}>Sign in to access your Orders, Offers and Wishlist.</Text>
    <FormControl>
        <Stack spacing={4}>
            <InputGroup mt={"40px"}>
                <InputLeftAddon children='+91' />
                <Input disabled={toggle} type='tel' placeholder='Enter your mobile no' focusBorderColor='white' marginRight={"10%"}/>
                {toggle?<InputRightElement width='4.5rem'>
        <Button onClick={()=>setToggle(false)} color={"red"} h='1.75rem' size='sm' >
          Change
        </Button>
      </InputRightElement>
:null}
            </InputGroup>
            {toggle? <>
                <HStack textAlign={"center"} gap={6}>
                                    <HStack> <PinInput otp>
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                    </HStack>
                                    {!count?<Text onClick={submit}color={"red"} cursor={"pointer"}>Resend OTP</Text>:null}
                                </HStack>
                                {count?<Text fontSize={"12px"}>waiting for OTP... {count} Sec.</Text>:null}

                <Button colorScheme='blue' children={"Verify"} color="#fff" variant='solid' />
            </>:
            <Stack alignItems={"center"}>
          <Button onClick={submit} spinnerPlacement='end' colorScheme='blue' w={50} h={50} rounded={100} children={<ChevronRightIcon w={8} h={8} color="#fff" />} variant='solid' />
            </Stack>
         }
         </Stack>
         
        

    </FormControl>
</Stack>
</Stack>
<Text fontSize='xs' textAlign={"center"} marginTop="20px">By continuing you agree to our <span style={{"color":"red"}}>Terms of service</span></Text>
<Text fontSize='xs' mb="20px" textAlign={"center"}>and <span style={{"color":"red"}}>Privacy & Legal Policy.</span></Text>
    </Box>

    );
}

export default Login;