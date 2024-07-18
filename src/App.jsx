import React, { useEffect, useState } from 'react'
import CheckOut from './components/CheckOut'
import ItemContainer from './components/ItemContainer'
import Cart from './components/Cart'
import jsonData from "./data.json"


function App() {
  const [data, setData]= useState(jsonData)
  const [cart, setCart] = useState([])
  const [checkOutScreen, setCheckOutScreen] = useState(false)

  useEffect(()=>{
    let newD = jsonData.map((item)=>({
      ...item,
      price: item.price.toFixed(2),
    }))
    setData(newD)
  }, [])

  const addToCart = (item)=>{
    console.log(cart);
    if(cart.length < 1){
      let i=[{ instances: 1, ...item}]
      setCart(i)
    }else {
      let found = false;
      let container = cart.map((cartItem)=>{
        if(cartItem.name === item.name){
          found=true;
          cartItem.instances += 1;
        }
        return cartItem
      })
      if(!found){
        setCart([...container, { instances: 1, ...item}])
      }else{
        setCart([...container])
      }
    }
  }

  const removeFromCart = (item)=>{
    let found = 0;
    let container =cart.map((cartItem)=>{
      if(cartItem.name === item.name){
        found=cartItem.instances-1;
        cartItem.instances -= 1;
      }
      return cartItem
    })

    if(found<1){
      console.log("yeah");
      container=container.filter((cartItem)=> cartItem.name !== item.name)
      setCart([...container])
    }else {
      setCart([...container])
    }
    console.log(cart);
  }

  const removeItem = (name)=>{
    let container = cart.filter((cartItem)=> cartItem.name !== name)
    setCart([...container])
  }
  return (
    <>
      <main className="w-full relative bg-[#fdf8f4] pt-20 text-[#38353c] flex flex-col xlg:flex-row justify-center gap-1 items-start">
        <section className={` ${
            checkOutScreen ? "grid" : "hidden"
          }  w-full h-full bg-[#00000069] fixed  place-content-center top-0 left-0 z-10`}
        >
          <CheckOut  setCheckOutScreen={setCheckOutScreen} cart={cart} setCart={setCart} />
        </section>
        <div className=" w-full xlg:w-fit max-w-[720px] lg:max-w-[900px] sm:p-10 p-[5vw] pt-0 mx-auto xlg:mx-0 ">
          <h1 className=" text-4xl sm:text-6xl  pb-12 w-fit font-bold">
          Desserts
          </h1>
          <ItemContainer removeFromCart={removeFromCart} data={data} cart={cart} addToCart={addToCart} />
        </div>
        <div className="p-[5vw] sm:p-10 pt-6  lg:pl-4 w-full xlg:max-w-[500px]">
          <Cart cart={cart} setCheckOutScreen={setCheckOutScreen} removeItem={removeItem} />
        </div>
      </main>
    </>
  )
}

export default App
