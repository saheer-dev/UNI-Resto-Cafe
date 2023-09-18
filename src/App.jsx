import React from "react";
import Menu from "./Components/Menu";
import NavBar from "./Components/NavBar";
import { ContextApi } from "./Components/Context_Api/ContextApi";
import { Cart } from "./Components/Cart.jsx/Cart";

function App() {
  return (
    <>
      <ContextApi>
        <Cart>
          <NavBar />
          <div className="[90vw] my-auto">
            <Menu />
          </div>
        </Cart>
      </ContextApi>
    </>
  );
}

export default App;
