import { useState } from 'react'

export const useLocalStorage = initialValue => {
  const [storedCart, setStoredCart] = useState(() => {
    const item = window.localStorage.getItem('Cart')
    return item ? JSON.parse(item) : initialValue
  })

  const setCart = updatedValue => {
    setStoredCart(updatedValue)

    window.localStorage.setItem('Cart', JSON.stringify(updatedValue))
  }

  const addItem = item => {
    setCart([...storedCart, item])
  }

  const removeItem = (e, id) => {
    e.preventDefault()
    const newCart = storedCart.filter(item => item.id !== id)

    setCart(newCart)
  }

  return [storedCart, addItem, removeItem]
}
