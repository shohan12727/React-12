import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin name="Rahat"></Cousin>
        <Cousin name="Raha"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
