import { Box, Button, Flex, Img, Text } from '@chakra-ui/react'
import { css } from '@emotion/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';


export default function ProductDetails() {
    const location = useLocation()
    // console.log(location.pathname);
    // const {url} = props
    const {_id} = useParams()
    // console.log(_id);

    const arr = location.pathname.split('/')
    // console.log(arr);

    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/${arr[1]}/${_id}`)
        .then((res)=>{
            setProduct(res.data)
            // console.log(res.data)
          })
        .catch((err)=>{
            console.log(err);
        })
          
    },[_id, arr])
  return (
    <Box>
        <Flex mt="150px" justifyContent={["space-evenly","space-evenly","space-evenly","space-evenly"]} gap="50px"  flexDirection={["column","column","column","row"]}>
            <Box>
                <Img p={"20px"}  h="auto" 
                    css={css`&:hover {transition: .15s ease; -webkit-transform: scale(1);-ms-transform: scale(1);transform: scale(1.15);}`}
                    cursor={"pointer"} borderRadius="8px" width={["500px","420px","360px","420px"]} mt={"10px"}
                    src={product.image}/>
            </Box>
            <Box textAlign={["center","center","center","left"]}>
                <Text lineHeight="40px" fontWeight={"750"} color="black" fontSize={"20px"}>{product.title}</Text>
                {/* <Flex gap={2} justifyContent={"center"}  w={["45%","45%","30%","25%"]}  m={["auto","auto","auto","18px"]}> */}
                    <Text as="b"  fontSize={"18px"}> ₹ {product.price} </Text>M.R.P.
                {/* </Flex> */}
                <Button mt="20px" cursor={"pointer"} border="none" backgroundColor={"#008ECC"} w={"100%"} color={"white"} colorScheme='twitter'>Add TO Cart</Button>
            </Box>
            
        </Flex>
    </Box>
  )
}
