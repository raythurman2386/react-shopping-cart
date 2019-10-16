import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts'

const Product = props => {
  const { addItem } = useContext(ProductContext)
  return (
    <div className='product'>
      <img src={props.product.image} alt={`${props.product.title} book`} />

      <h1 className='title'>{props.product.title}</h1>

      <p className='price'>${props.product.price}</p>

      <button onClick={() => addItem(props.product)}>Add to cart</button>
    </div>
  )
}

export default Product
