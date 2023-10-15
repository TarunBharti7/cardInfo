import React, { useContext } from 'react'
import myContext from '../context/myContext'

const ProductInfo = () => {
    const context = useContext(myContext);
    const state = context;
    console.log(state);
  return (
    <div>ProductInfo</div>
  )
}

export default ProductInfo