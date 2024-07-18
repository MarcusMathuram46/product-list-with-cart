import React from 'react'

function CartItem({ name, instances, price, removeItem }) {
  return (
    <div className="w-full flex flex-row items-center justify-between p-4 border-[#ad8b8538] border-b">
      <span>
        <p className="font-semibold">{name}</p>
        <span className="flex items-center justify-start gap-3">
            <p className="text-[#c83b0e]">{instances}</p>
            <p className="text-[#ad8b85]">@ ${price}</p>
            <p className="text-[#ad8b85] font-bold ">${(Number(instances)* Number(price)).toFixed(2)}</p>
        </span>
      </span>
      <button onClick={()=> removeItem(name)}>
        <img className="w-[16px] hover:scale-110" src="../assets/images/icon-remove-item.svg" alt="" />
      </button>
    </div>
  )
}

export default CartItem
