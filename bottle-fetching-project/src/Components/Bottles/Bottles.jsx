import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToStoredCart,
  getStoreCart,
  removeFromCart,
} from "../../Utilities/LocalStorage/localstorage";
import Cart from "../Cart/Cart";
const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise);
  // console.log(bottles);

  // useEffect
  useEffect(() => {
    const storedCartIDs = getStoreCart();

    const storedCart = [];
    for (const id of storedCartIDs) {
      const cartBottle = bottles.find((bottle) => bottle.id == id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  const [cart, setCart] = useState([]);
  const handleAddToCart = (bottle) => {
    // console.log("Bottle will be added");
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    console.log("remove item from the cart", id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id)
  };

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to the card: {cart.length}</p>
      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      {/* <img src={img} alt="" /> */}
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
