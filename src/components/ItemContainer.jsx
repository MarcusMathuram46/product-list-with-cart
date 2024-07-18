import React from 'react'
import Item from './Item'

function ItemContainer({data, cart, addToCart, removeFromCart}) {
  return (
    <section className="w-full grid sm:grid-cols-3 grid-cols-1 gap-5">
        {data.map((item, index)=>{
            return(
                <Item key={index} item={item} cart={cart} removeFromCart={removeFromCart}
                addToCart={addToCart}/>
            )
        })}
    </section>
  )
}

export default ItemContainer
