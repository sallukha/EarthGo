 import React from "react";
import Fog from "../assets/images/fog.png";
const Home = () => {
  return (
    <> 
      <div className="flex pt-12 md:flex-row justify-center items-center p-6 md:p-12 lg:p-16 gap-3 md:gap-5">
        
        <div className="w-32 md:w-48 lg:w-64">
          <img src={Fog} alt="Fog" className="w-full transform hover:scale-105 transition-transform duration-500" />
        </div>
 
        <div className="flex items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">15</h1>
          <p className="mt-1 md:mt-4 text-xl md:text-3xl">°</p>
          <p className="mt-2 md:mt-6 ml-2 text-lg md:text-2xl font-semibold">in Leh</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center px-4 md:px-0">
        <h1 className=" font-serif   text-lg md:text-xl lg:text-2xl"> Overcast Clouds</h1>
        <h1 className=" font-serif text-2xl md:text-3xl lg:text-4xl mt-2">
         Explore your favorite
           <span className="text-green-600 font-serif"> destination with us.</span>
        </h1>
        <button className=" text-white font-semibold bg-blue-400  mt-5 border border-black px-4 py-2 text-base md:text-lg lg:text-xl transition rounded-2xl">
          🚀 Start Your Journey – Download Now!
        </button>
      </div>
    </>
  );
};

export default Home;
