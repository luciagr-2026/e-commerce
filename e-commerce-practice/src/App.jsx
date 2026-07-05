import { Route, Routes } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { OrdersPage } from './pages/OrdersPage'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from '../src/pages/Checkout/CheckoutPage'
import { NotFound } from './pages/Checkout/NotFound'

import './App.css'



function App() {
 const [cart, setCart] = useState([])

 useEffect(() => {
  axios.get('/api/cart-items?expand=product')
      .then((response)=> {
        setCart(response.data);
      })
 }, [])

 


  return (
    <>
      <Routes>

        <Route index element={<HomePage cart={cart} />} />
        <Route path='checkout' element={<CheckoutPage cart={cart} />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </>
  )
}

export default App
