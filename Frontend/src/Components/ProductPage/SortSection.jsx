import { Button } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
// import { Select } from '@chakra-ui/select'
import { css } from '@emotion/react'
import React from 'react'

export default function SortSection() {
  return (
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
  )
}


// const SortSection = () => {
//   return (
//     <Box borderBottom="1px solid grey">
//         <Flex flexDirection={["column","column","row"]} justifyContent={"end"} >
//             <Box>
//                 <Select placeholder='Sort by : Recommended' variant='outline'>
//                     <option value='option1'>Price:High to Low</option>
//                     <option value='option2'>Price:Low to High</option>
//                 </Select>
//             </Box>
//         </Flex>
//     </Box>
//   )
// }

// export default SortSection;
