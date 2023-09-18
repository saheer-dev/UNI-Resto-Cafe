import React, { useState, useContext } from "react";
import { cartValue } from "./Cart.jsx/Cart";




export default function Counter() {



  const [counter, setCounter] = useState(0);

  let decre;

  const cartItemdetails = useContext(cartValue);

  if (counter > 0) {
    decre = () => {
      setCounter((counter) => counter - 1);
      cartItemdetails.setCart((prev) => prev- 1);
      console.log(cartItemdetails);
    };
  }
  
  function incre() {
    setCounter((counter) => counter + 1);
    cartItemdetails.setCart((c) => c + 1);

    console.log(cartItemdetails.cart);
  }



  return (
    <div className="flex text-white">
      <button className="bg-green-600 w-8 rounded-l-full items-center justify-center flex" onClick={incre}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>

      </button>
      <p className="bg-green-600 w-8  items-center flex justify-center">{counter}</p>
      <button className="bg-green-600 w-8 rounded-r-full items-center justify-center" onClick={decre}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
</svg>

      </button>
    </div>
  );
}
