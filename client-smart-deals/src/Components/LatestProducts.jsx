import React, { use } from "react";
import Product from "./Product";

const LatestProducts = ({ latestproductsPromise }) => {
  const latestProducts = use(latestproductsPromise);
  console.log(latestProducts);
  return (
    <div>
      <h2 className="text-5xl text-center ">
        Recent <span className="text-primary">Products</span>
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {latestProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
