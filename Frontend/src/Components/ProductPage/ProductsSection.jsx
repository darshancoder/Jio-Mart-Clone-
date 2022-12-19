import React, { useEffect } from 'react'
// import ShowMore from 'react-show-more-button';
import { useState } from 'react'
import axios from 'axios'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout'
// import { Img } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
// import SortSection from './SortSection'
import { css } from '@emotion/react'
import SingleProductPage from './SingleProductPage'
import { useLocation } from 'react-router-dom'
// import styles from "./Products.module.css"


// function getUrl(api, sort, orderBy) {
//   if (sort && orderBy) {
//     api = `${api}?_sort=${sort}&_order=${orderBy}`;
//   } 

//   return api;
// }

export default function ProductsSection(props) {
    // const history = useHistory()
    const location = useLocation()
    // const [ searchParams, setSearchParams] = useSearchParams();
    // console.log(location.pathname);
    
    const [product, setProduct] = useState("")
    const [orderBy, setOrderBy] = useState("");
    // const sort = "price";
    const {url} =props;

useEffect(() => {
      // let apiUrl = getUrl(
      //   `http://localhost:8080/${url}`,
      //   sort,
      //   orderBy,
      // );
  
      axios.get(`https://mysterious-moth-gaiters.cyclic.app/${url}?orderBy=${orderBy}`)
        .then((res) => {
          setProduct(res.data)
          // console.log(res.data)
        });
    }, [orderBy,url]);

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
      <Button onClick={()=> setOrderBy("desc")}
        size={"sm"} h="25px" mt={"13px"} fontWeight="500"
        css={css`&:hover {backgroundcolor: white;}`} cursor={"pointer"}
        border="white" backgroundColor="white" 
      >High to Low
      </Button>
      <Button onClick={()=> setOrderBy("asc")}
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
      <Button onClick={()=> setOrderBy("")}
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
                <SimpleGrid  columns={[2,2,3,4]} spacing={10}> 
                {
                    product &&
                    product?.map((product)=>{
                        return(
                                <Box key={product._id}>
                                  <SingleProductPage key={product._id} path = {location.pathname}
                                    ID={product._id}
                                    Image={product.image}
                                  //  <Box textAlign={"start"}>
                                    Title={product.title}
                                    Price={product.price}
                                   
                                    // product ={product}
                                   // <Button css={css`&:hover {bacground-color:none;}`} cursor={"pointer"} color={"white"} backgroundColor={"#008ECC"} w={"100%"}>Add TO Cart</Button> 
                                    // Button={<Button cursor={"pointer"} border="none" backgroundColor={"#008ECC"} w={"100%"} color={"white"} colorScheme='twitter'>Add TO Cart</Button>}
                                    // </Box> 
                                  />
                                </Box>
                        )
                    })
                }
                </SimpleGrid> 
              
            {/* </ShowMore> */}
        </Box>

    </Box>
)}
