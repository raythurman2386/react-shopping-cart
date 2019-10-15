import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import data from './data'

// Components
import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

function App() {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item])
  }

  return (
    <div className='App'>
      <ProductContext.Consumer value={{ products, addItem }}>
        <CartContext.Consumer value={cart}>
          <Navigation />
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={ShoppingCart} />
        </CartContext.Consumer>
      </ProductContext.Consumer>
    </div>
  )
}

export default App
