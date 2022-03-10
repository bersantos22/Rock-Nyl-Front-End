import { createContext, useState } from "react";

const CartContext = createContext({ disks: [] });

function CartContextComponent(props) {
  const [cartState, setCartState] = useState({ disks: [] });
  
  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextComponent };