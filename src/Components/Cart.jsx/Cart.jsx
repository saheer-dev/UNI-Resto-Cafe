import React, { createContext, useState } from "react";

const cartValue = createContext();

function Cart(props) {
  const [cart, setCart] = useState(0);

  return (
    <div>
      <cartValue.Provider value={{ cart: cart, setCart: setCart }}>
        {props.children}
      </cartValue.Provider>
    </div>
  );
}
export { Cart, cartValue };
