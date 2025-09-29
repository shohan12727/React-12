import React from "react";
import Feature from "./Feature";

const PricingCard = ({ pricing }) => {
  console.log(pricing);

  return (
    <div className="border bg-amber-600 rounded-2xl p-4 text-white flex flex-col">
      <div className="flex justify-between">
        <h1>{pricing.name}</h1>
        <h1>{pricing.price}</h1>
      </div>
      <div className="bg-green-400 py-3 mt-4 px-1 rounded-2xl flex-1">
        <h2>{pricing.description}</h2>
        {
            pricing.features.map(feature => <Feature feature={feature}></Feature>)
        }
      </div>
      <button className="btn w-full bg-amber-100 rounded-2xl mt-2">Subscribe</button>
    </div>
  );
};

export default PricingCard;
