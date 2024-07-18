import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

function Cart({ cart, removeItem, setCheckOutScreen }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let num = 0;

    cart.forEach((item) => {
      num += Number(item.instances) * Number(item.price);
    });
    setTotal(num.toFixed(2));
  }, [cart]);
  return (
    <article className="w-full mx-auto max-w-[700px] xlg:max-w-[450px] bg-white p-8 rounded-lg">
      <p className=" text-2xl sm:text-3xl font-bold text-[#c83b0e] mb-6">Your Cart ({"0"})</p>
      <section>
        {cart.length < 1 ? (
          <div className="w-full text-center">
            <img className="mx-auto" src="../assets/images/illustration-empty-cart.svg" alt="" />
            <p>Your added Item will appear here</p>
          </div>
        ) : (
          <div className="w-full flex flex-col items-start justify-center gap-8">
            <div className="w-full">
              {cart.map((item) => (
                <CartItem
                  key={item.name.trim()}
                  removeItem={removeItem}
                  {...item}
                />
              ))}
            </div>
            <div className="w-[100%] flex flex-row items-center justify-between ">
              <p>Order Total</p>
              <p className="text-2xl font-bold">${total}</p>
            </div>
            <div className="w-full flex gap-2 items-center justify-center p-4 bg-[#fdf8f4] rounded-lg">
              <img
                src="../assets/images/icon-carbon-neutral.svg"
                alt="icon-carbon-neutral"
              />
              <p>
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>
            <button onClick={() => setCheckOutScreen(true)} className="w-full text-center p-4 bg-[#c83b0e] hover:bg-[#812304] duration-200 text-white font-bold text-xl rounded-full">
              Confirm Order
            </button>
          </div>
        )}
      </section>
    </article>
  );
}

export default Cart;
