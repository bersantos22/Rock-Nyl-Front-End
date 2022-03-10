import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext/index";

export function Cart(props) {
  const { cartState } = useContext(CartContext);

  return (
    <>
      {cartState.disk ? (
        cartState.disk.map((disk) => <h1>{disk.title}</h1>)
      ) : (
        <h1>Seu carrinho está vazio</h1>
      )}
    </>
  );
}