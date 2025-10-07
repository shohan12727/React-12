import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {
    const {products} = useProducts()
    return (
         <div>
      <div className="flex justify-between py-6">
        <h1 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
       All Product </h1>
        <button
          to="/products"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
        >
         Search
        </button>
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