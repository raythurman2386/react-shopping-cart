import { createContext } from 'react'

export const CartContext = createContext()
export const ProductContext = createContext()

export const CartProvider = CartContext.Provider
export const ProductProvider = ProductContext.Provider
