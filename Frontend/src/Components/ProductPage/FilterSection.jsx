import React from 'react'
// import {Box, Flex, } from "@chakra-ui/react"

export default function FilterSection() {
  return (
    <div>
      <div style={{disply: "flex",margin:"0px", textAlign:"left",border:"1px solid red"}}>
        <p>Categories</p>
        <input type="checkbox" checked="checked"/>
        <label class="container">One
        <span class="checkmark"></span>
        </label>
      </div>
    </div>
  )
}
