import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Img, Input, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import { css } from '@emotion/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';


export default function ProductDetails() {
    const location = useLocation()
    // console.log(location.pathname);
    // const {url} = props
    const {_id} = useParams()
    // console.log(_id);

    const arr = location.pathname.split('/')
    // console.log(arr);
    const toast=useToast();
    const [product, setProduct] = useState({})
    let main=JSON.parse(localStorage.getItem("alldata")) || []
    useEffect(() => {
        

        axios.get(`https://mysterious-moth-gaiters.cyclic.app/${arr[1]}/${_id}`)
        .then((res)=>{
            setProduct(res.data)
            console.log(res.data)
            // main.push(res.data)
            // localStorage.setItem("alldata",JSON.stringify(main))          

          })
        .catch((err)=>{
            console.log(err);
        })
        
          
    },[])
// console.log(product);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    const handleClick= ()=>{
        axios.get(`https://mysterious-moth-gaiters.cyclic.app/${arr[1]}/${_id}`)
        .then((res)=>{
            setProduct(res.data)
            // console.log(res.data)
            main.push(res.data)
            localStorage.setItem("alldata",JSON.stringify(main))
            toast({
                title: 'Item added to cart.',
                status: 'success',
                duration: 9000,
                position: "top",
                isClosable: true,
            })         

          })
        .catch((err)=>{
            console.log(err);
        })
        
    }

  return (
    <Box lineHeight="20px" backgroundColor={"white"}>
        <Flex mt="150px" justifyContent={["space-evenly","space-evenly","space-evenly","space-evenly"]} gap="50px"  flexDirection={["column","column","column","row"]}>
            <Box>
                <Img p={"20px"}  h={["auto"]} ml={["20px","0px","00px","200px"]}
                    css={css`&:hover {transition: .15s ease; -webkit-transform: scale(1);-ms-transform: scale(1);transform: scale(1.15);}`}
                    cursor={"pointer"} borderRadius="8px" width={["300px","360px","360px","420px"]} mt={"60px"}
                    src={product.image}/>
            </Box>
            <Box textAlign={["center","center","center","left"]}>
                <Text lineHeight={'30px'} fontWeight={"750"} color="black" fontSize={"20px"}>
                    {product.title}
                </Text>
                <Text fontWeight={"500"} color={"gray"}>Private Label</Text>
                {/* <Flex gap={2} justifyContent={"center"}  w={["45%","45%","30%","25%"]}  m={["auto","auto","auto","18px"]}> */}
                M.R.P. <Text as="b"  fontSize={"18px"}> ₹ {product.price}</Text> Inclusive of all taxes
                {/* </Flex> */}
                <Text fontWeight={"650"} color="green.400">In Stock</Text>
                <Box display={"flex"}  fontSize={"15px"} gap="5px" textAlign={["center","center","center","left"]} ml={['110px','240px','300px','0px']}>
                <Text>Sold by </Text>
                <Text><Link to='#' style={{color:"#008ECC", textDecoration:"none"}}>Reliance Retail</Link></Text>
                </Box>
                <Box  display={"flex"} textAlign={["center","center","center","left"]} ml={['80px','240px','270px','0px']} gap="5px">
                    <Text>Inaugural Offer </Text>
                    <Text fontWeight={"700"}> Free Shipping</Text>
                </Box>
                <Button onClick={handleClick}
                 mt="20px" cursor={"pointer"} border="none" backgroundColor={"#008ECC"} w="320px" color={"white"} colorScheme='twitter'>
                    Add TO Cart
                </Button>

                <Text fontWeight={"500"} fontSize={"18px"}>Delivery</Text>
                <Input mt="0px" w={"200px"} h={"14px"} placeholder="400020"/>
                <Button color={'red'} border={"none"} h={"38px"}>Check</Button>
                <Text mt="-1px" color="gray" fontSize={"12px"}>Check for estimated delivery date</Text>
                <Text fontWeight={"600"}>Available Offers 11</Text>

                <Flex ml={["90px","16px","35px","30px"]} gap={"30px"} flexDirection={["column","row","row","row"]}>
                    <Box w="200px" h="120px" p="5px" borderRadius={"8px"} border={"1px solid"}>
                        <Button p="10px" cursor={"pointer"} bgColor={"white"} fontSize={"10px"} h={"15px"} color={"green"} borderColor={"green"}>BUY MORE SAVE MORE</Button>
                        <Text fontSize={"13px"}>Get Sugar at ₹ 9 only on Grocery Shopping of Min. ₹ 1499.</Text>
                        <Text fontSize={"12px"} lineHeight="40px" color="gray">View 1 offer</Text>
                    </Box>

                    <Box p="5px" w="200px" h="120px"  borderRadius={"8px"} border={"1px solid"}>
                        <Button p="10px" cursor={"pointer"} bgColor={"white"} fontSize={"10px"} h={"15px"} color={"green"} borderColor={"green"}>BUY MORE SAVE MORE</Button>
                        <Text fontSize={"13px"}>Get Sugar at Rs.9 only on Grocery Shopping of Min. 1499.</Text>
                        <Text fontSize={"12px"} lineHeight="40px" color="gray">View 1 more offers</Text>
                    </Box>
                    <Box p="5px" w="200px" h="120px"  borderRadius={"8px"} border={"1px solid"}>
                        <Button p="10px" cursor={"pointer"} bgColor={"white"} fontSize={"10px"} h={"15px"} color={"green"} borderColor={"green"}>BANK OFFERS</Button>
                        <Text fontSize={"13px"}>10% Cashback. Min. Txn Rs. 1000/- Max Cashback Up to Rs. 500/- on AU Debit & Credit Cards.</Text>
                        <Text fontSize={"12px"} lineHeight="1px" color="gray">View 7 more offers</Text>
                    </Box>
                </Flex>

                <Box>
                <Button ref={btnRef} ml={["150px", "630px", "640px","640px"]}border="none" mt='10px' fontSize={"13px"} bgColor={"white"} color='red' onClick={onOpen}>
                    See More
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
                    <DrawerHeader fontWeight={"600"} color={"white"} bgColor={"#088ECC"}>Available Offers (11)</DrawerHeader>
                    <DrawerBody>
                    <Box mt="10px">
                        <Button p="10px" cursor={"pointer"} bgColor={"white"} fontSize={"10px"} h={"15px"} color={"green"} borderColor={"green"}>BUY MORE SAVE MORE</Button>
                        <Text fontSize={"13px"}>Get Sugar at ₹ 9 only on Grocery Shopping of Min. ₹ 1499.</Text>
                    </Box>
                    <Box>
                        <Button p="10px" cursor={"pointer"} bgColor={"white"} fontSize={"10px"} h={"15px"} color={"green"} borderColor={"green"}>BUY MORE SAVE MORE</Button>
                        <Text fontSize={"13px"}>Get Sugar at Rs.9 only on Grocery Shopping of Min. 1499.</Text>
                        <Text fontSize={"13px"}>25% Instant Discount on Ordering via Whatsapp</Text>
                    </Box>
                    <Box>
                        <Button p="10px" cursor={"pointer"} bgColor={"white"} fontSize={"10px"} h={"15px"} color={"green"} borderColor={"green"}>BANK OFFERS</Button>
                        <Text fontSize={"13px"}>Save more with your preferred bank!</Text>
                        <Text fontSize={"13px"}>10% Cashback. Min. Txn Rs. 1000/- Max Cashback Up to Rs. 500/- on AU Debit & Credit Cards.</Text>
                        <Text fontSize={"13px"}>Get up to Rs. 500 Cashback on using Paytm on JioMart for Min. Txn of Rs 1000. Min assured Cashback o</Text>
                        <Text fontSize={"13px"}>Get flat 5% Cashback up to Rs. 50 on minimum purchase amount of Rs. 750 · Get flat Rs.100</Text>
                        <Text fontSize={"13px"}>5% cashback on first ever transaction through Simpl up to ₹ 750/-</Text>
                        <Text fontSize={"13px"}>Get 2X cashback up to 250 Rs as part of CRED pay double deal days</Text>
                        <Text fontSize={"13px"}>10% Instant Discount. Min. Txn Rs. 25000/- Max discount Up to Rs. 2500/- on HDFC Debit & Credit Card</Text>
                        <Text fontSize={"13px"}>10% Cashback up to Rs. 75 for new users. Get assured Cashback up to Rs. 500 on Electronics</Text>
                        <Text fontSize={"13px"}>10% cashback upto Rs. 75 on slice cards via SPARK.</Text>
                    </Box>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <SimpleGrid columns={'3'} ml={["90px","100px","200px","0px"]} justifyContent="center">
            <Img w={"25px"}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRAwJvxXoU8uxY3meU4g9MunoTlb28Aa5nCy9wKk1&s'
        />
        <Img w="25px"
         src='https://www.mmppicture.co.in/wp-content/uploads/2021/03/Facebook-Icon-PNG-1.png'
        />
        <Img w='25px'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png'
        />
                </SimpleGrid>
                </Box>
            </Box>    
                 
        </Flex>
        
        <Divider orientation='horizontal' />
        <Box  ml={['20px','60px','60px','60px']} textAlign={['left','left','left',"left"]}>
            <Text fontWeight={"700"}>Description</Text>
            <Text fontWeight={"600"} color="black" fontSize={"15px"}>{product.title}</Text>
            <Text fontSize={"14px"}>
                The beauty of an Onion is that it can go just about anywhere. 
                Cut it into thin slices to top off your favourite burger or hot dog,
                or chop it into little cubes to bring out the sweetness in curry dishes.
                Chopped Onions are perfect for fish dishes, quiche, stews and chili.
                Onions can be roasted whole until tender and then chopped, or caramelized
                by slowly cooking them in butter for a delicious treat for a delicious treat.
                They are also delicious when dipped in batter and deep-fried! So, go ahead, buy Onion 1 kg online now!
            </Text>
            <Text fontSize={"14px"} fontWeight={"500"}>Disclaimer:</Text>
            <Text fontSize={"14px"}>
                Despite our attempts to provide you with the most accurate information possible, the actual packaging,
                ingredients and colour of the product may sometimes vary Please read the label, directions and warnings carefully before use
            </Text>
        </Box>
        
       
    </Box>
  )
}
