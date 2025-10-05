import React from "react";
import bannerBook from "../../assets/books.jpg";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white py-10 px-6 md:px-16 lg:px-24">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug text-gray-800">
          Books to freshen up <br className="hidden sm:block" /> your bookshelf
        </h1>
        <button className="bg-[#23BE0A] text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-[#1ca308] hover:shadow-lg transition-all duration-300 ease-in-out">
          View The List
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <img
          className="w-4/5 md:w-3/4 lg:w-2/3 h-auto object-contain rounded-xl"
          src={bannerBook}
          alt="Books Banner"
        />
      </div>
    </section>
  );
};

export default Banner;
