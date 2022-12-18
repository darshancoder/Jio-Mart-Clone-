import { Box, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
// import {useSearchParams, useParams, useLocation} from 'react-router-dom'

const FilterSection = (props) => {
    // const history = useHistory()
    // const location = useLocation()
    // const [ searchParams, setSearchParams] = useSearchParams();
    // console.log(location);
    
  return (
    <>
      <Box ml="15px" textAlign={"left"} w={["50%","30%","30%","40%"]} p="10px">
      <Flex  backgroundColor={"white"} p="10px" borderRadius={"8px"}  border="1px solid grey" mt="10px" flexDirection={"column"} >
        <Text as="b" fontSize="15px">CATEGORIES</Text>
       <Link to="/fruits" style={{color:"#008ECC", textDecoration:"none"}}>Fruits & Vegetables</Link>
       <Link to="/dairy" style={{color:"#008ECC", textDecoration:"none"}}>Dairy & Bakery</Link>
       <Link to="/staples" style={{color:"#008ECC", textDecoration:"none"}}>Staples</Link>
       <Link to="/HomeAppliance" style={{color:"#008ECC", textDecoration:"none"}}>HomeAppliance</Link>
       <Link to="/men" style={{color:"#008ECC", textDecoration:"none"}}>Fasion</Link>
       <Link to="/mobiles" style={{color:"#008ECC", textDecoration:"none"}}>Mobiles & Tablets</Link>
       <Link to="/makeup" style={{color:"#008ECC", textDecoration:"none"}}>Make-Up</Link>
       <Link to="/autocare" style={{color:"#008ECC", textDecoration:"none"}}>Auto Care</Link>
       <Link to="/toysgames" style={{color:"#008ECC", textDecoration:"none"}}>Toys</Link>
      </Flex>
    
      <Flex backgroundColor={"white"} p="10px" borderRadius={"8px"} border="1px solid grey" mt="10px" flexDirection={"column"} borderTop="1px solid grey">
        <Text fontSize="15px" as="b" mt="10px" >Filters</Text>
        <Text fontSize="15px">Availability</Text>
        <Checkbox fontSize="15px">InStock Products</Checkbox>
        <Text fontSize="15px" as="b" mt={"20px"}>CATEGORIES</Text>
        <Input mt="10px" fontSize="15px" w={"78%"} h="10px" placeholder='Search...'/>
        <Checkbox mt="10px"  fontSize="15px">Exotic Vegetables</Checkbox>
        <Checkbox fontSize="15px">Citus, Mango & Graps</Checkbox>
        <Checkbox fontSize="15px">Apples & Pears</Checkbox>
        <Checkbox fontSize="15px">Apples</Checkbox>
        <Checkbox fontSize="15px">Citrus</Checkbox>
        <Checkbox fontSize="15px">Others</Checkbox>
        <Checkbox fontSize="15px">Berries</Checkbox>
      </Flex>
      
      <Flex backgroundColor={"white"} p="10px" borderRadius={"8px"} border="1px solid grey" mt="10px" flexDirection={"column"} borderTop="1px solid grey">
        <Text as="b">Brand</Text>
        <Input mt="10px" w={"78%"} h="10px" placeholder='Search...'/>
        <Checkbox mt="10px" fontSize="15px">Trueganic</Checkbox>
        <Checkbox fontSize="15px">TheBerryPeople</Checkbox>
        <Checkbox fontSize="15px">B-Roots</Checkbox>
        <Checkbox fontSize="15px">KING SOLOMON</Checkbox>
        <Checkbox fontSize="15px">Nimboos Ras</Checkbox>
        <Checkbox fontSize="15px">BOYO</Checkbox>
        <Checkbox fontSize="15px">ROYAL DELIGHT</Checkbox>
      </Flex>

        <Flex backgroundColor={"white"} p="10px" borderRadius={"8px"} border="1px solid grey" mt="10px" flexDirection={"column"}>
          <Text as="b">Discount</Text>
          <Checkbox mt="10px"  fontSize="15px">10% and above</Checkbox>
          <Checkbox fontSize="15px">20% and above</Checkbox>
          <Checkbox fontSize="15px">30% and above</Checkbox>
          <Checkbox fontSize="15px">40% and above</Checkbox>
          <Checkbox fontSize="15px">50% and above</Checkbox>
          <Checkbox fontSize="15px">60% and above</Checkbox>
          <Checkbox fontSize="15px">70% and above</Checkbox>
          <Checkbox fontSize="15px">80% and above</Checkbox>
        </Flex>
      </Box> 

      
    </>
  )
}

export default FilterSection