import React, { useEffect, useState } from 'react'
import Addbtn from './Addbtn';

function Item({ cart, item, addToCart, removeFromCart}) {
    const { image, name, category, price }= item;
    const [cartData, setCartData]= useState([]);

    useEffect(()=>{
        setCartData(cart.filter((item)=>item.name === name));
    },[cart])
  return (
    <div className="relative w-[100%]  sm:max-w-[260px] h-[340px] mx-auto sm:mx-0">
      <img className={` ${
          cartData.length >= 1 && "border-2 border-[#c83b0e]"
        } w-[100%] object-cover object-center h-[200px] rounded-lg mb-4`} src={image.desktop} alt="name" />
      <div className="pl-[3px] pt-4">
        <p className="text-[14px] text-[#ad8b85]">{category}</p>
        <p className="text-[18px] text-[#38353c] font-semibold">{name}</p>
        <p className="text-[18px] text-[#c83b0e] font-semibold">${price}</p>
        <div className="">
            <div className="absolute left-[50%] translate-x-[-50%] bottom-[120px]">
            <Addbtn addToCart={addToCart} removeFromCart={removeFromCart} item={item} instance={cartData.length > 0 ? cartData[0].instances : 0} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item
