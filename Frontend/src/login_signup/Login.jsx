import axios from "axios";
import {
    FormControl,
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
import {UserLoginRequest,UserLoginSuccess,UserLoginFailure} from "../AuthReducer/action"
import {useDispatch} from "react-redux"

const Login = () => {
    const [isMobile] = useMediaQuery('(max-width: 600px)')
    const [toggle, setToggle] = useState(false)
    const [flag, setFlag] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location);
    const login= () => {
        if (email.length ==0 || password.length==0) {
            toast({
                title: 'Please enter Email ID and Password',
                status: 'error',
                duration: 9000,
                position: "top",
                isClosable: true,
            })
        } else {
            dispatch(UserLoginRequest())
            axios.post("https://mysterious-moth-gaiters.cyclic.app/users/login", { email,password })
                .then((res) => {
                    console.log(res)
                    setToggle("true")
                    if(res.data.isUser){
                    dispatch(UserLoginSuccess(res.data))
                        toast({
                            title: 'Login success.',
                            status: 'success',
                            duration: 9000,
                            position: "top",
                            isClosable: true,
                        })
                        navigate("/")
                    } else if(res.data.isUser==undefined){
                        dispatch(UserLoginFailure())
                        toast({
                            title: 'Login failed plese enter correct login id and password.',
                            status: 'error',
                            duration: 9000,
                            position: "top",
                            isClosable: true,
                        })

                    }
                    else{
                        dispatch(UserLoginFailure())
                        toast({
                            title: 'User not found please signup .',
                            status: 'error',
                            duration: 9000,
                            position: "top",
                            isClosable: true,
                        })
                    }
                })
      .catch((err) => {console.log(err)
        dispatch(UserLoginFailure())
                    toast({
                        title: 'Something wrong..?',
                        status: 'error',
                        duration: 9000,
                        position: "top",
                        isClosable: true,
                    })
                })
        }
    }
    return (
        <Box pt={"40px"} bg="whitesmoke" mt="90px" height={"100vh"} >
            <Stack bg={"whiteAlpha.900"} ml={["5", "5", "10"]} mr={"5%"} direction={['column', 'column', 'row']} justifyContent={['space-between']}>

                {isMobile ? null : <Stack w={["100%", "100%", "40%"]}><Image borderLeftRadius={"2xl"} src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="login-banner" /></Stack>}

                <Stack w={["100%", "100%", "40%"]} p={"10px"}>
                    <Heading mt={"10"} as='h1' size='md' alignItems="left">Sign in</Heading>
                    <Text fontSize={["xm", "sm"]}>Sign in to access your Orders, Offers and Wishlist.</Text>
                    <FormControl>
                        <Stack spacing={4}>
                            <InputGroup mt={"40px"} size='xs' w='90%'>
                                <Input size='xs' focusBorderColor='white'  type='email' value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Id'
                                    _placeholder={{ opacity: 0.6, fontSize: "12px" }} marginRight={"10%"} required
                                    />
                            </InputGroup>
                            <InputGroup mt={"40px"} size='xs' w='90%'>
                                <Input focusBorderColor='white'  type='password' value={password}
                                    onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'
                                    _placeholder={{ opacity: 0.6, fontSize: "12px" }} marginRight={"10%"} 
                                    />
                            </InputGroup>

                            <Stack alignItems={"center"}>
                                <Button onClick={login} spinnerPlacement='end' border={0}
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