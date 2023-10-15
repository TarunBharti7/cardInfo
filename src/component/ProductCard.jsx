import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({productImage, productId, productCatagory}) => {
  return (
    <div className='product'>
     <Link to={`product/${productId}`}>
        <img width="200px" src={productImage} alt="img" />
        <h2>{productCatagory}</h2>
     </Link>
    </div>
  )
}

export default ProductCard