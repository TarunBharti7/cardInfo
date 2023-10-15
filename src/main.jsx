import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductInfo from './component/ProductInfo.jsx';
import MyState from './context/myState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/product' element={<ProductInfo/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
