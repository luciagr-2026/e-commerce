import { Route, Routes } from 'react-router'
import { OrdersPage } from './pages/OrdersPage'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from '../src/pages/Checkout/CheckoutPage'
import { NotFound } from './pages/Checkout/NotFound'

import './App.css'


function App() {


  return (
    <>
      <Routes>

        <Route index element={<HomePage />} />
        <Route path='checkout' element={<CheckoutPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </>
  )
}

export default App
