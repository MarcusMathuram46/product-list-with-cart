import React, { useState } from "react";

function Addbtn({ addToCart, item, removeFromCart, instance }) {
  const [add, setAdd] = useState(true);
  const [num, setNum] = useState(1);
  return (
    <button className="w-[140px]">
      <span
        onClick={() => addToCart(item)}
        className={`${
          instance > 0 ? "hidden" : "flex"
        } items-center justify-center gap-1 py-[10px] text-[14px] rounded-full border border-[#ad8b85] hover:border-[#c83b0e] bg-white`}
      >
        <img
          className=" w-[20px]"
          src="../assets/images/icon-add-to-cart.svg"
          alt=""
        />
        Add to cart
      </span>
      <span
        className={`${
          instance > 0 ? "inline-block" : "hidden"
        } max-w-[100%] flex bg-[#c83b0e] rounded-full items-center justify-between py-[10px] px-[16px]`}
      >
        <span onClick={() => removeFromCart(item)} className=" hover:text-[#c83b0e] hover:bg-white border border-white rounded-full w-[20px] h-[20px]  text-white grid place-content-center pb-1 text-[20px] duration-200 active:scale-95">-</span>
        <p className="text-white">{String(instance)}</p>
        <span onClick={() => addToCart(item)} className=" hover:text-[#c83b0e] hover:bg-white border border-white rounded-full w-[20px] h-[20px]  text-white grid place-content-center pb-1 text-[20px] duration-200 active:scale-95">+</span>
      </span>
    </button>
  );
}

export default Addbtn;
