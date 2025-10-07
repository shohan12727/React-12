import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../../Components/ProductCard/ProductCard";


const Home = () => {
  const products = useLoaderData();
  const feturedProducts = products.slice(0, 6);
  // const {products, loading, error} = useProducts()

  return (
    <div>
      <div className="flex justify-between py-6">
        <h1 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
          Featured Products
        </h1>
        <Link
          to="/products"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
        >
          See All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {feturedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
