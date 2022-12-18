import axios from "axios";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputGroup,
    Stack,
    Input,
    Image,
    Button,
    Heading,
    Text,
    Box,
    useToast
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useNavigate, useLocation} from "react-router-dom"

const Login = () => {
    const [isMobile] = useMediaQuery('(max-width: 600px)')
    const [toggle, setToggle] = useState(false)
    const [flag, setFlag] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location);
    const submit = () => {


        if (email.length ==0 || password.length==0) {
            setFlag(true)
        } else {
            axios.post("http://localhost:8080/otp/number", { email,password })
                .then((res) => {
                    console.log(res)
                    setToggle("true")
                    toast({
                        title: 'OTP sent successfully  .',
                        status: 'success',
                        duration: 9000,
                        position: "top",
                        isClosable: true,
                    })
                })
                .catch((err) => console.log(err))
        }
    }
    return (
        <Box pt={"40px"} bg="whitesmoke" mb="0px" height={"100vh"} >
            <Stack bg={"whiteAlpha.900"} ml={["5", "5", "10"]} mr={"5%"} direction={['column', 'column', 'row']} justifyContent={['space-between']}>

                {isMobile ? null : <Stack w={["100%", "100%", "40%"]}><Image borderLeftRadius={"2xl"} src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="login-banner" /></Stack>}

                <Stack w={["100%", "100%", "40%"]} p={"10px"}>
                    <Heading mt={"10"} as='h1' size='md' alignItems="left">Sign in</Heading>
                    <Text fontSize={["xm", "sm"]}>Sign in to access your Orders, Offers and Wishlist.</Text>
                    <FormControl>
                        <Stack spacing={4}>
                            <InputGroup mt={"40px"} size='sm' w='90%'>
                                <Input focusBorderColor='white' disabled={toggle} type='email' value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Id'
                                    _placeholder={{ opacity: 0.6, fontSize: "12px" }} marginRight={"10%"} required
                                    minLength="10" maxLength="10" />
                            </InputGroup>
                            <InputGroup mt={"40px"} size='sm' w='90%'>
                                <Input focusBorderColor='white' disabled={toggle} type='password' value={password}
                                    onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'
                                    _placeholder={{ opacity: 0.6, fontSize: "12px" }} marginRight={"10%"} required
                                    minLength="10" maxLength="10" />
                            </InputGroup>
                            {flag ? <span style={{ color: "red", "margin-top": "0px", "font-size": "10px" }}>Invalid Input</span> : null}

                            <Stack alignItems={"center"}>
                                <Button onClick={submit} spinnerPlacement='end' border={0}
                                    colorScheme='blue' 
                                     variant='solid' >Login</Button>
                            </Stack>

                        </Stack>
                    </FormControl>
                </Stack>
            </Stack>
            <Text fontSize='xs' textAlign={"center"} marginTop="20px">By continuing you agree to our <span style={{ "color": "red" }}>Terms of service</span></Text>
            <Text fontSize='xs' mb="20px" textAlign={"center"}>and <span style={{ "color": "red" }}>Privacy & Legal Policy.</span></Text>
        </Box>
    );
}

export default Login;