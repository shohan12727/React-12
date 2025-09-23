import React from 'react';
import banner from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";
const Banner = () => {
    return (
       <div
        className="max-w-[1200px] mx-auto bg-gray-800"
        style={{
          backgroundImage: `url(${bgShadow})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center">
          <img src={banner} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="md:text-3xl text-2xl mt-2 text-white text-center">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-xl text-white text-center">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            className="bg-[#E7FE29] text-black font-semibold px-6 py-2 rounded-xl shadow-md 
             hover:bg-[#d6eb20] hover:scale-105 hover:shadow-lg 
             transition-all duration-300 ease-in-out w-auto self-center mb-4"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    );
};

export default Banner;