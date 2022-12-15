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
import { ChevronRightIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
    const [show1, setShow1] = React.useState(false)
    const handleClick1 = () => setShow1(!show1)
    const [show2, setShow2] = React.useState(false)
    const handleClick2 = () => setShow2(!show2)
    const [isMobile] = useMediaQuery('(max-width: 600px)')
    return (
        <Box pt={"40px"} bg="whitesmoke" mb="0px" h={"100vh"}>
            <Stack bg={"whiteAlpha.900"} ml={["5", "5", "10"]} mr={"5%"} direction={['column', 'column', 'row']} justifyContent={['space-between']}>

                {isMobile ? null : <Box w={["100%", "100%", "40%"]}><Image borderLeftRadius={"2xl"} src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="login-banner" /></Box>}

                <Stack w={["100%", "100%", "50%"]}>
                    <Heading mt={"10"} as='h1' size='md' alignItems="left">Sign Up</Heading>
                    <Stack>
                        <Text fontSize={["xm", "sm"]}>Please enter your details.</Text>
                        <FormControl>
                            <Stack spacing={4}>

                                <Input type='text' placeholder='Your First Name' focusBorderColor='white' marginRight={"10%"} />
                                <Input type='text' placeholder='Your Last Name' focusBorderColor='white' marginRight={"10%"} />
                                <Input type='email' placeholder='Enter Your Email Id' focusBorderColor='white' marginRight={"10%"} />
                                <Box>
                                    <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            type={show1 ? 'text' : 'password'}
                                            placeholder='Enter Your Password'
                                            focusBorderColor='white'

                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' onClick={handleClick1}>
                                                {show1 ? <ViewOffIcon /> : <ViewIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <Text color={"red"} fontSize={"12px"}>Use 8 or more characters with a mix of letters & numbers</Text>
                                </Box>

                                <InputGroup size='md'>
                                    <Input
                                        type={show2 ? 'text' : 'password'}
                                        placeholder='Enter Your Password'
                                        focusBorderColor='white'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick2}>
                                            {show2 ? <ViewOffIcon /> : <ViewIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </Stack>
                            <Stack>
                                <Heading mt={"10"} as='h1' size='md' alignItems="left">Verify</Heading>
                                <HStack justifyContent={"space-between"}>
                                    <Text fontSize={"14px"}>We have sent 4 digit OTP on <strong>+91 8236898936</strong></Text>
                                    <Text color={"red"} cursor={"pointer"}>Change No.</Text>
                                </HStack>
                                <HStack textAlign={"center"} gap={6}>
                                    <HStack> <PinInput otp>
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                    </HStack>
                                    <Text color={"red"} cursor={"pointer"}>Resend OTP</Text>
                                </HStack>
                                <Button colorScheme='blue' children={"Verify"} color="#fff" variant='solid' />
                            </Stack>
                        </FormControl>
                    </Stack>
                </Stack>
            </Stack>
            <Text fontSize='xs' textAlign={"center"} marginTop="20px">By continuing you agree to our <span style={{ "color": "red" }}>Terms of service</span></Text>
            <Text fontSize='xs' mb="20px" textAlign={"center"}>and <span style={{ "color": "red" }}>Privacy & Legal Policy.</span></Text>
        </Box>

    );
}

export default Signup;