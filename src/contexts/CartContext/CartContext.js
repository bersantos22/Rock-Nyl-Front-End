import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] =  useState([])
    
    function handleAddItemToCart(url, name,  price){
        const itemObject = {url, name, price};
        setCart([...cart, itemObject])
    }

    function handleRemoveIIemFromCart(clickedItemIndex){
        const filteredCart = cart.filter(
            (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
        );
        setCart(filteredCart);
    }

    function clearCart(){
        setCart([]);
    }

    
    return(
        <CartContext.Provider value={{cart, handleAddItemToCart, handleRemoveIIemFromCart,clearCart}}>{children}</CartContext.Provider>
    );
};

