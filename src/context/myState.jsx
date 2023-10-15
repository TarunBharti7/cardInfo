import React from 'react'
import MyContext from './myContext';
import ProductInfo from '../component/ProductInfo';

function MyState(props) {
    const state = {
        name: "Tarun",
        class: "Bca"
    }
  return (
    <MyContext.Provider value={{state}}>
       {/* {props.children} */}
       {children}
    </MyContext.Provider>
  )
}

export default MyState