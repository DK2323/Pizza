import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar/Navbar'
import Products from './Products'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import { CartProvider } from './CartContext'

const App = () => {
  
  return (
    <>
      <Router>
        <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:_id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
