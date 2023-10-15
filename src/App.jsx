import React, { useContext, useEffect, useState } from 'react'
import ProductInfo from './component/ProductInfo';


const App = () => {


  const url = "https://fakestoreapi.com/products/";

    const [data , setData] = useState([]);

    const apiCall = async () => {
      const response = await fetch(url);
        const data = await response.json();
        setData(data);
        // console.log(data);
        // console.log(count);
    }

    useEffect(() => {
        apiCall()
    }, [])
  return (
    <div>
    <ProductInfo/>
    </div>
  )
}

export default App