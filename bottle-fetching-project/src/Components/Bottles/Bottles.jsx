import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise);
  // console.log(bottles);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (bottle) => {
    // console.log("Bottle will be added");
    const newCart = [...cart, bottle];
    setCart(newCart);
 
    
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
           bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
