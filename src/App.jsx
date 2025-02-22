import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Cart from './component/Cart'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import productList from './component/data'


function App () {
  const [productId, setProductId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(()=>{
    const filteredObject = productList.filter((product)=> product.id === productId);
    setCartAllProduct([...cartAllProduct, ...filteredObject]);
  }, [productId]);
  

  return (
    <div>
      <BrowserRouter>
      <Header cartAllProduct={cartAllProduct}/>
        <Routes>
          <Route path='/' element={<Home setProductId={setProductId}/>}></Route>
          <Route path='/cart' element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
