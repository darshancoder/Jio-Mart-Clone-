import { Box, Button, Img, Text  } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'
import {Link} from 'react-router-dom'

export default function SingleProductPage({ID,Image,Title,Price,path}) {
  
  return (
    <Box  backgroundColor={"white"} h={["auto"]} p={"10px"} w={["300px","220px","150px","250px" ]} borderRadius="8px" 
    mt='3px' border={"1px solid grey"}>
    <Link to={`${path}/productdetails/${ID}`}>

            <Img  src={Image} alt="products" onClick={()=> console.log(ID) }
                css={css`&:hover {transition: .15s ease; -webkit-transform: scale(1);-ms-transform: scale(1);transform: scale(1.15);}`}
                cursor={"pointer"} borderRadius="8px" width={["190px","178px","140px","178px"]} mt={"10px"}/>
        </Link> 
        <Box textAlign={"left"}>
        <Text mt="30px" fontWeight={"650"}>{Title}</Text>
        M.R.P. <Text as="b">₹ {Price}</Text>
        </Box>
        
        <Button mt="20px" cursor={"pointer"} border="none" backgroundColor={"#008ECC"} w={"100%"} color={"white"} colorScheme='twitter'>Add TO Cart</Button>
    </Box>
  )
}
