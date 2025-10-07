import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useState } from "react";

const Products = () => {
  const { products } = useProducts();
//   const [search, setSearch] = useState('')
  return (
    <div>
      <div className="flex justify-between py-6">
        <h1 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
          All Products{" "}
          <span className="text-sm text-white">({products.length})</span>
        </h1>
        <div className="relative w-full max-w-sm">
            {/* search  */}
          <input
            type="search"
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-2 pr-10 text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
