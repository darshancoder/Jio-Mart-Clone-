import React, { useEffect } from 'react'
// import ShowMore from 'react-show-more-button';
import { useState } from 'react'
import axios from 'axios'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout'
import { Img } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
// import SortSection from './SortSection'
import { css } from '@emotion/react'
// import styles from "./Products.module.css"

export default function ProductsSection(props) {
    const [product, setProduct] = useState("")
    const {url} =props
    useEffect(() => {
    axios.get(`http://localhost:8080/${url}`)
      .then((res)=>{
        setProduct(res.data)
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
      
    })
    
  return (
    <Box>
       <Box>
       <Flex w={["100%","100%","100%","100%"]}  mt={"30px"} gap={["5px","6px","6px","8px"]}justifyContent="end" >
      <Text mt="12px">Sorting</Text>
      <Button 
        fontWeight="none" cursor={"pointer"}
        css={css`&:hover {backgroundcolor: white;}`}
        border="white" backgroundColor="white"
        h="25px" mt={"13px"}
      >Popularity
      </Button>
      <Button 
        size={"sm"} h="25px" mt={"13px"} fontWeight="500"
        css={css`&:hover {backgroundcolor: white;}`} cursor={"pointer"}
        border="white" backgroundColor="white" 
      >High to Low
      </Button>
      <Button 
        size={"sm"} h="25px" mt={"13px"} fontWeight="500"
        css={css`&:hover {backgroundcolor: white;}`}
        border="white" backgroundColor="white" cursor={"pointer"}
      >Low to High
      </Button>
      <Button 
        size={"sm"} h="25px" mt={"13px"} fontWeight="500"
        css={css`&:hover {backgroundcolor: white;}`} cursor={"pointer"}
        border="white" backgroundColor="white" 
      >Discount
      </Button>
      <Button 
        cursor={"pointer"} size={"sm"} h="25px" mt={"13px"} fontWeight="500"
        css={css`&:hover {backgroundcolor: white;}`}
        border="white" backgroundColor="white" 
      >All Products
      </Button>
    </Flex>
       </Box>
        <Box backgroundColor={"white"} mt="20px"  p={["30px 20px"]}>
            <Text textAlign={"start"} mt="-5" color={"gray"} fontWeight="600">All Products</Text>
            {/* <ShowMore  maxHeight={860}> */}
                <SimpleGrid  columns={[1,2,3,4]} spacing={10}> 
                {
                    product &&
                    product?.map((product)=>{
                        return(
                            
                                <Box backgroundColor={"white"} h={["auto"]} p={"10px"} w={["300px","220px","150px","250px" ]} borderRadius="8px" 
                                     mt='3px' border={"1px solid grey"} key={product._id}>
                                    <Img 
                                     css={css`&:hover {transition: .15s ease;
                                        -webkit-transform: scale(1);
                                        -ms-transform: scale(1);
                                        transform: scale(1.15);}`}
                                     cursor={"pointer"} borderRadius="8px" width={["190px","178px","140px","178px"]} mt={"10px"} src={product.image} alt="product"
                                    />
                                    <Box textAlign={"start"}>
                                    <Text mt="30px" fontWeight={"650"}>{product.title}</Text>
                                    <Text>M.R.P. {product.price}</Text> 
                                    {/* <Button css={css`&:hover {bacground-color:none;}`} cursor={"pointer"} color={"white"} backgroundColor={"#008ECC"} w={"100%"}>Add TO Cart</Button> */}
                                    <Button cursor={"pointer"} border="none" backgroundColor={"#008ECC"} w={"100%"} color={"white"} colorScheme='twitter'>Add TO Cart</Button>
                                    </Box>
                                </Box>
                        )
                    })
                }
                </SimpleGrid> 
            {/* </ShowMore> */}
        </Box>

    </Box>
)}
