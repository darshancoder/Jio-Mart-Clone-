import { EditIcon } from '@chakra-ui/icons';
import {
    FormControl,
    FormLabel,
    Stack,
    Input,
    HStack,
    Button,
    Heading,
    Text,
    Box,
    Circle,
    Divider,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Select, useMediaQuery
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdNoteAlt } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {UserLogout} from "../AuthReducer/action"
import { useNavigate } from 'react-router-dom';
const Account = () => {
    const [input, setInput] = useState('')
    const [isMobile] = useMediaQuery('(max-width: 768px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [iSPro, setISPro] = useState(false)
    const [iSAdd, setISAdd] = useState(false)
    const handleInputChange = (e) => setInput(e.target.value)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    let state=useSelector((state)=>{
        return state
    })
    // console.log(state)
    const {userData,isAuth}=state;
    const {Fname, Lname,email}=userData;

    const Logout=()=>{
        dispatch(UserLogout())
        navigate("/user/login")


    }

    const updateProfile=()=>{
        setISAdd(false)
        setISPro(true)
        
        onOpen();
    }
    const updateAddress=()=>{
        setISAdd(true)
        setISPro(false)
        
        onOpen()
    }


    return (
        <>
           {iSPro&&<Box>
                <Modal isOpen={isOpen} onClose={onClose} size="xs">
                    <ModalOverlay />
                    <ModalContent>
                        <Button w="5" m="auto" mt="-50px" rounded={"100%"} color="red" onClick={onClose}>X</Button>
                        <ModalHeader m="auto" fontSize={"xs"} >Edit Profile</ModalHeader>

                        <ModalBody pl="3" pr="8">
                            <FormControl  >
                                <FormLabel color={"#008ecc"} fontSize="10px"  mb={0} >FIRST NAME</FormLabel>
                                <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type='text' value="" onChange={handleInputChange} />
                                <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>LAST NAME</FormLabel>
                                <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type='text' value="Chandrakar " onChange={handleInputChange} />
                                <HStack>
                                <Box w="50%">
                                <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>GENDER</FormLabel>
                                    <Select variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} placeholder='Select option'>
                                        <option selected value='option1'>Male</option>
                                        <option value='option2'>Female</option>
                                        <option value='option3'>Others</option>
                                    </Select>
                                </Box>
                                 <Box w="50%">
                                 <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>DATE OF BIRTH</FormLabel>
                                    <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type="date"  />
                                 </Box>
                                </HStack>
                                <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>Email ID</FormLabel>
                                <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type='email' value="bkc.janta@gmail.com" onChange={handleInputChange} />
                                <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>MOBILE NO</FormLabel>
                                <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"}  size={"xs"} type='tel' value="+91-9131616205" onChange={handleInputChange} />
                                
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                        <Button size={"sm"} type="button" w="100%" colorScheme='blue' variant='solid' mr={3} >
                                Save Changes
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>}
        {iSAdd && <Box>
        <Modal isOpen={isOpen} onClose={onClose} size="xs">
            <ModalOverlay />
            <ModalContent>
                <Button w="5" m="auto" mt="-50px" rounded={"100%"} color="red" onClick={onClose}>X</Button>
                <ModalHeader m="auto" fontSize={"xs"} >Add Address</ModalHeader>

                <ModalBody pl="3" pr="8">
                    <FormControl  >
                        <FormLabel color={"#008ecc"} fontSize="10px"  mb={0} >PIN CODE</FormLabel>
                        <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type='text'   />
                        <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>HOUSE NO</FormLabel>
                        <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type='text'  />
                        <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>ADDRESS  LINE</FormLabel>
                        <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type='text'  />
                        <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>LANDMARK</FormLabel>
                        <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4}  size={"xs"} type='text'  />
                        <HStack>
                        <Box w="50%">
                        <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>CITY</FormLabel>
                        <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type='text'  />
                        </Box>
                         <Box w="50%">
                         <FormLabel color={"#008ecc"} fontSize="10px" mb={0}>STATE</FormLabel>
                        <Input variant='flushed' borderTop={"0px"} borderRight={"0px"} borderLeft={"0px"} mb={4} size={"xs"} type='text'  />
                         </Box>
                        </HStack>                        
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                <Button size={"sm"} type="button" w="100%" colorScheme='blue' variant='solid' mr={3} >
                        Save Changes
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>}

            <Box mt={"150px"} pl={["0%", "5%", "5%"]} pr={["12%", "10%", "5%"]} bg={"whiteAlpha.900"} mb="0px" height={"100vh"}  >
                <Heading as='h1' size='md' alignItems="left">My Account</Heading>
                <Stack direction={['column', 'row', 'row']} justifyContent={['space-between']}>
                    <Stack w={["100%", "100%", "40%"]} h="fit-content" bg={"#008ecc"} p={"20px"} borderRadius="5px">
                        <Stack direction={['row']} justifyContent={['space-between']} >
                            <Stack direction={['row']} gap="20px" >
                                <Circle size={['40px', '60px']} bg='white' color='#008ecc'>
                                    {isAuth?<Box as='span' fontWeight='bold' fontSize='lg'>
                                        {Fname[0]+""+Lname[0]}
                                    </Box>:null}
                                </Circle>
                                <Box >
                                    <Heading mt={"0px"} mb={"0px"} size='sm' color={"white"}> {Fname+" "+Lname} </Heading>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' color={"whiteAlpha.700"}>{email}</Text>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' color={"whiteAlpha.700"}>+91 8236898936</Text>
                                </Box>

                            </Stack>
                            {isMobile ? <EditIcon cursor={"pointer"} color={"white"} onClick={updateProfile} /> : null}
                        </Stack>

                        <Box >
                            <Stack cursor={"pointer"} direction={['row']} p={"10px"} bg={"#55bae6"} mt='20px' borderRadius="5px" alignItems={"center"}>
                                <MdNoteAlt color={"white"} />
                                <Heading   size='sm' color={"white"}>Order History</Heading>
                            </Stack>
                            <Stack cursor={"pointer"} direction={['row']} p={"10px"} bg={"#55bae6"} mt='10px' borderRadius="5px" alignItems={"center"}>
                                <FaMapMarkerAlt color={"white"} />
                                <Heading onClick={updateAddress} size='sm' color={"white"}>Delivery Address</Heading>
                            </Stack>
                        </Box>




                    </Stack>
                    {isMobile ? null : <Box w={["100%", "100%", "60%"]} p={"20px"} h="fit-content" bg={"#c8e9f7"} borderRadius="5px">
                        <HStack justifyContent={"space-between"}>
                            <Heading mt={0} size={"sm"}>Account Information </Heading>
                            <Text onClick={updateProfile} cursor="pointer" color="red">Edit</Text>
                        </HStack>
                        <HStack justifyContent={"space-between"} alignItems={"start"}>
                            <Box w="50%" h="100%"  >
                                <Box>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"normal"} color={"black.600"}>Full Name</Text>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"bold"}>{Fname+" "+Lname}</Text>
                                </Box>

                                <Box mt={"5"}>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"normal"} color={"black.600"}>Email Id</Text>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"bold"}>{email}</Text>
                                </Box>
                            </Box>

                            <Box m="0" w="50%" >
                                <Box >
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"normal"} color={"black.600"}>Age</Text>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"bold"}>25</Text>
                                </Box>
                                <Box mt={"5"}>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"normal"} color={"black.600"}>Mobile No.</Text>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"bold"}>+91 8236898936</Text>
                                </Box>
                                
                        
                                <Box mt={"5"}>
                                    <Text mt={"0px"} mb={"0px"} fontSize='xs' fontWeight={"normal"} color={"black.600"}>Address</Text>
                                </Box>



                            </Box>
                        </HStack>

                    </Box>}
                </Stack>
                <Stack direction={['column', 'row', 'row']} justifyContent={['space-between']} mt={5}>
                    <Stack w={["100%", "100%", "40%"]} h="fit-content" bg={"#ebf5fa"} p={"20px"} borderRadius="5px">
                        <Text m={0} cursor="pointer" size='sm' >My List</Text>
                        <Divider />
                        <Text m={0} cursor="pointer" size='sm' >Wish List</Text>
                        <Divider />
                        <Text m={0} cursor="pointer" size='sm' >Pan Card Information</Text>
                        <Divider />
                        <Text m={0} cursor="pointer" size='sm' >Legal Information</Text>
                        <Divider />
                        <Text m={0} cursor="pointer" size='sm' >Need Help</Text>
                        <Divider />
                        <Text m={0} cursor="pointer" size='sm' >Contact Us</Text>
                        <Divider />
                        <Text m={0} cursor="pointer" size='sm' onClick={Logout} >Logout</Text>
                        <Divider />

                    </Stack>


                    {isMobile ? null : <Box w={["100%", "100%", "60%"]} p={"20px"} h={"500px"} bg={"white"} borderRadius="5px">

                    </Box>}
                </Stack>
                <Text fontSize='xs' textAlign={"center"} marginTop="20px">By continuing you agree to our <span style={{ "color": "red" }}>Terms of service</span></Text>
                <Text fontSize='xs' mb="20px" textAlign={"center"}>and <span style={{ "color": "red" }}>Privacy & Legal Policy.</span></Text>
            </Box>
        </>

    );
}

export default Account;