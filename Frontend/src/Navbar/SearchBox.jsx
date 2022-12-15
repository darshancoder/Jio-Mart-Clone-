// import { Flex } from '@chakra-ui/react'
import React from 'react'
// import { useState } from 'react'
import stylesearch from "./SearchBox.module.css"

export const SearchBox = ({suggestion}) => {
  console.log(suggestion)
      //  const [activeOption, setActiveOption]= useState(0)

  return (
    <div className={stylesearch.searchcontainer}>
    {suggestion.map((el)=>{
        return  <div style={{display:"block"}}  key={el.id}>
           < h3>{el} </h3>  
          </div>
          
      })}</div>
  )
}