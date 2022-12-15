// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
import styles from "./Products.module.css"
export default function Products() {
    // const [product, setProduct] = useState("")

    // useEffect(() => {
    //   fetch("http://localhost:8080/fruits")
    //   .then((res)=>res.json())
    //   .then((res)=>{
    //     setProduct(res)
    //     console.log(res)
    //   })

    //   axios.get("http://localhost:8080/fruits")
    //   .then((res)=>{
    //     setProduct(res.data)
    //     console.log(res.data)
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
      
    // }, [])
    
  return (
    <div>
        <div >
            {/* {
                product &&
                product?.map((product)=>{
                    return(
                        <div key={product._id}>
                            <img src={product.image} alt="product"/>
                            <p>{product.title}</p>
                        <p>{product.price}</p> 
                        </div>
                    )
                })
            } */}
        </div>
    </div>
)}
