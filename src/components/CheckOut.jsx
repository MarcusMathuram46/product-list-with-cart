import React, { useEffect, useState } from 'react'

function CheckOut({ cart, setCart, setCheckOutScreen}) {
    const [total, setTotal]= useState(0);

    useEffect(()=>{
        let num=0;

        cart.forEach((item)=>{
            num +=Number(item.instances) * Number(item.price);
        })
        setTotal(num.toFixed(2));
    }, [cart])
  return (
    <section className="w-[90vw]  max-w-[500px] max-h-[90vh] bg-white p-6 flex flex-col items-start rounded-lg justify-center gap-[20px]">
        <img className="w-[30px] mb-[-16px]" src="../assets/images/icon-order-confirmed.svg" alt="" />
        <div>
            <h3 className="font-bold text-[1.8rem]">Order Confirmed</h3>
            <p className="text-xs pl-[4px] text-[#ad8b85] font-semibold">We hope you enjoy the food</p>
        </div>
        <div className="w-full text-sm overflow-hidden overflow-y-scroll h-fit rounded-t-lg bg-[#fdf8f4] p-4">
            {cart.map((item)=>(
                <div key={item.name} className="w-full flex flex-row items-center justify-between gap-3 border-b py-2 border-[#ad8b8538]">
                    <div className="flex items-center gap-2">
                        <img src={item.image.thumbnail} alt={item.name} className=" rounded-md w-[40px]" />
                        <span className="block">
                            <p className="font-semibold text-sm mb-1">{item.name}</p>
                            <span className="flex items-center justify-start gap-2">
                                <p className="text-[#c83b0e]">{item.instances}x</p>
                                <p className="text-[#ad8b85] font-semibold">@{item.price}</p>
                            </span>
                        </span>
                    </div>
                    <p className="font-semibold text-base">${item.price * item.instances}</p>
                </div>
            ))}
        </div>
        <div className=" w-full text-sm mt-[-20px] h-fit rounded-b-lg  bg-[#fdf8f4] p-4 flex flex-row items-center justify-between ">
            <p>Order Total</p>
            <p className="text-xl font-bold">${total}</p>
        </div>
        <button onClick={()=>{
            setCheckOutScreen(false);
            setCart([]);
        }} className="w-full text-center bg-[#c83b0e] text-white font-bold text-sm p-3 rounded-full">
            Start New Order
        </button>
    </section>
  )
}

export default CheckOut
