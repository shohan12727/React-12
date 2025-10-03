import React from "react";
import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin name="tom tom"></Cousin>
        <Cousin name="jojo"></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
