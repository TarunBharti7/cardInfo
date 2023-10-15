import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Product = () => {
    const [data , setData] = useState([]);

    const fetchData = async () => {
        const url = await fetch("https://fakestoreapi.com/products/");

        const response = await url.json();
        // console.log(response);
        setData(response)
    }

    useEffect(() => {
        fetchData();
    }, [])
  return (
    <>
        <div className='image-container'>
            {data.map((product, index) => (
                <ProductCard
                    key={index}
                    productImage={product.image}
                    productId={product.id}
                    productCatagory={product.category}
                />
            ))}
        </div>
    </>
  )
}

export default Product