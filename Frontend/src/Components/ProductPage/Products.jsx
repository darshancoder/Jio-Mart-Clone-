import { Flex } from '@chakra-ui/layout'
import React from 'react'
import FilterSection from './FilterSection'
import ProductsSection from './ProductsSection'
// import SortSection from './SortSection'

export default function Products(props) {
    const {url} = props
    // console.log(props)
  return (
    <Flex mt={"150px"} >
        <FilterSection/>
        <ProductsSection url={url} />
    </Flex>
  )
}
