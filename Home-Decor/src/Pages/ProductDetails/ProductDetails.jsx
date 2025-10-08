import React from "react";
import { useParams } from "react-router";
import useProducts from "../../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find((p) => String(p.id) === id);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (!product)
    return <p className="text-center text-red-500 mt-10">Product not found.</p>;

  const { name, image, category, price, description } = product;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="bg-gray-100 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="object-contain h-80 w-full p-6 rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-sm text-gray-500 mb-4">
            Category:{" "}
            <span className="font-medium text-gray-700">{category}</span>
          </p>

          <p className="text-2xl font-semibold text-green-600 mb-6">${price}</p>

          <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

          <button className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-green-700 transition-all">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
