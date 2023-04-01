import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
  const[pizza, setPizza] = useState([])
  useEffect(() => {
    fetch(`https://star-spark-pasta.glitch.me/api/products`)
    .then(res => res.json())
    .then(data => {
      setPizza(data)
    })
  },[])
  return (

    <>
       <div className="productSection">
        <p className='productTitle'>PRODUCTS</p>
        <div className='products'>
          {
            pizza.map((product) => 
              <Product key={product._id} product={product}/>
          )
          }
        </div>
       </div>
    </>

  )
}

export default Products 