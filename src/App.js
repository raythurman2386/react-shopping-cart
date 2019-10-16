import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import data from './data'

// Components
import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'
import { ProductProvider } from './contexts'
import { CartProvider } from './contexts'
import { useLocalStorage } from './useLocalStorage'

function App(props) {
  // console.log(props)
  const [products] = useState(data)
  const [cart, addItem, removeItem] = useLocalStorage([])

  return (
    <div className='App'>
      <ProductProvider value={{ products, addItem }}>
        <CartProvider value={{ cart, removeItem }}>
          <Navigation />
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={ShoppingCart} />
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default App
