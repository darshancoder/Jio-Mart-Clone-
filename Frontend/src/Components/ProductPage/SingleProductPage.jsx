import { Box, Button, Img, Text  } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'


export default function SingleProductPage({ID,Image,Title,Price,path}) {
  console.log(path)
  const toast=useToast();
  let main=JSON.parse(localStorage.getItem("alldata")) || []
  const handleClick= ()=>{
    axios.get(`http://localhost:8080${path}/${ID}`)
    .then((res)=>{
        
        // console.log(res.data)
        main.push(res.data)
        localStorage.setItem("alldata",JSON.stringify(main)) 
        toast({
          title: 'Item added to Cart.',
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
    <Box  backgroundColor={"white"} h={["auto"]} p={"10px"} w={["80%","85%","90%","95%" ]} borderRadius="8px" 
    mt='3px' border={"1px solid grey"}>
    <Link to={`${path}/productdetails/${ID}`}>

            <Img  src={Image} alt="products" 
                css={css`&:hover {transition: .15s ease; -webkit-transform: scale(1);-ms-transform: scale(1);transform: scale(1.08);}`}
                cursor={"pointer"} borderRadius="8px" width={["75%","80%","85%","90%"]} h="auto"  mt={"10px"}/>
        </Link> 
        <Box textAlign={"left"}>
        <Text mt="30px" fontWeight={"650"}>{Title}</Text>
        M.R.P. <Text as="b">₹ {Price}</Text>
        </Box>
        
        <Button onClick={handleClick} mt="20px" cursor={"pointer"} border="none" backgroundColor={"#008ECC"} w={"100%"} color={"white"} colorScheme='twitter'>
          Add TO Cart
        </Button>
    </Box>
  )
}
