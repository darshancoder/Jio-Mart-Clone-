import axios from "axios";
import {
    FormControl,
    InputGroup,
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
    PinInputField,
    InputLeftElement,
    useToast
} from '@chakra-ui/react'
import { ChevronRightIcon, PhoneIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [isMobile] = useMediaQuery('(max-width: 600px)')
    const [toggle, setToggle] = useState(false)
    const [number, setNumber] = useState("")
    const [flag, setFlag] = useState(false);
    const [show1, setShow1] = React.useState(false)
    const handleClick1 = () => setShow1(!show1)
    const [show2, setShow2] = React.useState(false)
    const handleClick2 = () => setShow2(!show2)
    const toast = useToast();
    const [otp, setOtp] = useState("")
    const [otp1, setOtp1] = useState("")
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [valid, setValid] = useState(false)
    const [err,setErr]=useState(false);
    const navigate=useNavigate()
    const submit = () => {
        if (number.length < 10) {
            setFlag(true)
        } else {
            axios.post("https://mysterious-moth-gaiters.cyclic.app/otp/number", { number })
                .then((res) => {
                    console.log(res)
                    setToggle("true")
                    setOtp1(res.data.otp)
                    toast({
                        title: 'OTP sent successfully  .',
                        status: 'success',
                        duration: 9000,
                        position: "top",
                        isClosable: true,
                    })

                    setTimeout(() => {
                        toast({
                            title: 'OTP  .',
                            description: res.data.otp,
                            status: 'info',
                            duration: 9000,
                            position: "top-right",
                            isClosable: true,
                        })
                    }, 5000)
                })
                .catch((err) => {

                    console.log(err)
                    toast({
                        title: 'something wrong !',
                        status: 'error',
                        duration: 9000,
                        position: "top",
                        isClosable: true,
                    })
                })
        }
    }
    const changeNumber = () => {
        setToggle(false)
    }

    const onVerify = () => {
       
        if(Lname.length==0 || Lname.length==0 || password.length==0 || password1.length==0){
            setErr(true);
            toast({
                title: 'All fields are required *',
                status: 'error',
                duration: 9000,
                position: "top",
                isClosable: true,
            })
        }else if(password!=password1){
            setValid(true);
            toast({
                title: 'Password not matched',
                status: 'error',
                duration: 9000,
                position: "top",
                isClosable: true,
            })
        }else if(password.length<8){
            toast({
                title: 'Password should be minimum 8 character',
                status: 'error',
                duration: 9000,
                position: "top",
                isClosable: true,
            })
        }
        else if(otp!=otp1){
            toast({
                title: 'Please enter correct otp',
                status: 'error',
                duration: 900000,
                position: "top",
                isClosable: true,
            })
        }
        else{
            axios.post("https://mysterious-moth-gaiters.cyclic.app/users/signup", { Fname,Lname,email,password})
        .then((res) => {
            console.log(res)
            setToggle("true")
            if(res.data.isRegisterd){
                toast({
                    title: 'User already exists',
                    status: 'error',
                    duration: 9000,
                    position: "top",
                    isClosable: true,
                })
            }else{
                toast({
                    title: 'Sign Up successfully ',
                    status: 'success',
                    duration: 9000,
                    position: "top",
                    isClosable: true,
                })
                navigate('/user/login')
            }
           
     })
    .catch((err) => {
        
    console.log(err)
    toast({
        title: 'something wrong !',
        status: 'error',
        duration: 9000,
        position: "top",
        isClosable: true,
    })
    })
        }

    }

    return (
        <>
            {!toggle ? <Box pt={"40px"} bg="whitesmoke" mt="90px" height={"100vh"} >
                <Stack bg={"whiteAlpha.900"} ml={["5", "5", "10"]} mr={"5%"} direction={['column', 'column', 'row']} justifyContent={['space-between']}>

                    {isMobile ? null : <Stack w={["100%", "100%", "40%"]}><Image borderLeftRadius={"2xl"} src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="login-banner" /></Stack>}

                    <Stack w={["100%", "100%", "40%"]} p={"10px"}>
                        <Heading mt={"10"} as='h1' size='md' alignItems="left">Sign Up</Heading>
                        <Text fontSize={["xm", "sm"]}>Sign in to access your Orders, Offers and Wishlist.</Text>
                        <FormControl>
                            <Stack spacing={4}>
                                <InputGroup mt={"40px"} size={['xs', 'xs', 'xs', 'xs']} w='90%'>


                                    <Input focusBorderColor='white' disabled={toggle} type='tel' value={number}
                                        onChange={(e) => setNumber(e.target.value)} placeholder='Enter your mobile no'
                                        _placeholder={{ opacity: 0.6, fontSize: "12px" }} marginRight={"10%"} required
                                        minLength="10" maxLength="10" />
                                </InputGroup>
                                {flag ? <span style={{ color: "red", "margin-top": "0px", "font-size": "10px" }}>Mobile number must be 10 digit</span> : null}

                                <Stack alignItems={"center"}>
                                    <Button onClick={submit} spinnerPlacement='end' border={0}
                                        colorScheme='blue' w={50} h={50} rounded={100}
                                        children={<ChevronRightIcon w={8} h={8} color="#fff" />} variant='solid' />

                                </Stack>

                            </Stack>
                        </FormControl>
                    </Stack>
                </Stack>
                <Text fontSize='xs' textAlign={"center"} marginTop="20px">By continuing you agree to our <span style={{ "color": "red" }}>Terms of service</span></Text>
                <Text fontSize='xs' mb="20px" textAlign={"center"}>and <span style={{ "color": "red" }}>Privacy & Legal Policy.</span></Text>
            </Box> :
                <Box bg="whiteSmoke" pt={["0", "5", "10"]} pl={["0", "5", "10"]} pb={5}  >
                    <Stack bg={"whiteAlpha.900"} w={["100%", "90%", "90%"]} m={"auto"} borderRadius={"2xl"} direction={['column', 'column', 'row']} justifyContent={['space-between']}>

                        {isMobile ? null : <Stack w={["100%", "100%", "40%"]}><Image borderTopLeftRadius={"2xl"} src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="login-banner" /></Stack>}

                        <Box w={["100%", "100%", "35%"]} pr={["2%", "10%", "10%"]} pl={["2%", "0%", "10%"]} pb={5} >
                            <Heading as='h1' size='md' mb={5} mt={4} alignItems="left">Sign Up</Heading>
                            <Box>
                                <Text fontSize={["xm", "sm"]} mb={3}>Please enter your details.</Text>
                                <FormControl >
                                    <Stack spacing={4}>
                                        <InputGroup size={['sm']}>
                                            <Input
                                                required
                                                pr='4.5rem'
                                                type='text'
                                                placeholder='Your First Name'
                                                _placeholder={{ opacity: 0.6, fontSize: "12px" }}
                                                focusBorderColor='white'
                                                value={Fname}
                                                onChange={(e) => setFname(e.target.value)}
                                            />
                                        </InputGroup>
                                        <InputGroup size='sm'>
                                            <Input
                                                pr='4.5rem'
                                                type='text'
                                                placeholder='Your Last Name'
                                                _placeholder={{ opacity: 0.6, fontSize: "12px" }}
                                                focusBorderColor='white'
                                                value={Lname}
                                                onChange={(e) => setLname(e.target.value)}
                                            />
                                        </InputGroup>
                                        <InputGroup size='sm'>
                                            <Input
                                                pr='4.5rem'
                                                type='email'
                                                placeholder='Enter Your Email Id'
                                                _placeholder={{ opacity: 0.6, fontSize: "12px" }}
                                                focusBorderColor='white'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </InputGroup>
                                        <Box>
                                            <InputGroup size='sm'>
                                                <Input
                                                    pr='4.5rem'
                                                    type={show1 ? 'text' : 'password'}
                                                    placeholder='Enter Your Password'
                                                    _placeholder={{ opacity: 0.6, fontSize: "12px" }}
                                                    focusBorderColor='white'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <InputRightElement mt={.7} mr={.7} p={0} >
                                                    <Button border={0} bg={"white"} p={0} colorScheme={"white"} color={"black"} size='sm' onClick={handleClick1}>
                                                        {show1 ? <ViewOffIcon m={0} p={0} /> : <ViewIcon />}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <Text color={"red"} fontSize={"12px"}>Use 8 or more characters with a mix of letters & numbers</Text>
                                        </Box>

                                        <InputGroup size='sm'>
                                            <Input
                                                type={show2 ? 'text' : 'password'}
                                                placeholder='Enter Your Password'
                                                _placeholder={{ opacity: 0.6, fontSize: "12px" }}
                                                focusBorderColor='white'
                                                value={password1}
                                                onChange={(e) => setPassword1(e.target.value)}
                                            />
                                            <InputRightElement mt={.7} mr={.7} p={0}>
                                                <Button border={0} bg={"white"} colorScheme={"white"} color={"black"} size='sm' onClick={handleClick2}>
                                                    {show2 ? <ViewOffIcon /> : <ViewIcon />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        {flag ? <span style={{ color: "red", "margin-top": "0px", "font-size": "10px" }}>Mobile number must be 10 digit</span> : null}
                                    </Stack>
                                    <Stack>
                                        <Heading mt={"10"} as='h1' size='md' fontSize={"18px"} alignItems="left">Verify</Heading>
                                        <HStack justifyContent={"space-between"}>
                                            <Text fontSize={"12px"}>We have sent 4 digit OTP on <strong >+91 {number}</strong></Text>
                                            <Text color={"red"} fontSize={"12px"} onClick={changeNumber} cursor={"pointer"}>Change No.</Text>
                                        </HStack>
                                        <HStack textAlign={"center"} gap={6} >
                                            <HStack > <PinInput size={'sm'} otp onChange={(e) => setOtp(e)} >
                                                <PinInputField />
                                                <PinInputField />
                                                <PinInputField />
                                                <PinInputField />
                                            </PinInput>
                                            </HStack>
                                            <Text mb={5} w={"20%"} fontSize={"12px"} color={"red"} onClick={submit} cursor={"pointer"}>Resend OTP</Text>
                                        </HStack>
                                        <Button marginTop={"5px"} colorScheme='blue'
                                            children={"Verify"} color="#fff" variant='solid'
                                            onClick={onVerify}
                                        />
                                    </Stack>
                                </FormControl>
                            </Box>
                        </Box>
                    </Stack>
                    <Text fontSize='xs' textAlign={"center"} marginTop="20px">By continuing you agree to our <span style={{ "color": "red" }}>Terms of service</span></Text>
                    <Text fontSize='xs' mb="20px" textAlign={"center"}>and <span style={{ "color": "red" }}>Privacy & Legal Policy.</span></Text>
                </Box>

            }
        </>

    );
}

export default Signup;