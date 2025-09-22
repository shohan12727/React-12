import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToStoredCart,
  getStoreCart,
} from "../../Utilities/LocalStorage/localstorage";
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
  //  console.log(cart);
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to the card: {cart.length}</p>
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
