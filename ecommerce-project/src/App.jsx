import { Routes, Route } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { HomePage } from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((respone) => {
        setCart(respone.data)
      })
  }, [])
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
