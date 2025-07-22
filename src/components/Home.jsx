import React from "react";
import logo from "../assets/images/holograph.png";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
const Home = () => {
  return (
    <>
      <div className="flex flex-col px-4 mt-12    md:px-20 lg:px-96 items-center ">
        <div className="relative flex flex-col items-center md:items-start">
          <div className="relative  p-4">
            <img
              src={logo}
              alt="Holograph"
              className="w-40 md:w-60 lg:w-80 h-auto object-contain"
            />
            <div className="absolute bottom-[5%] left-[65%] transform -translate-x-1/2 flex items-center gap-2 px-3">
              <h1 className="text-4xl md:text-8xl font-light whitespace-nowrap">10°</h1>
              <h1 className="text-lg md:text-2xl font-light whitespace-nowrap">in Manali</h1>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-30 text-center md:text-left">
          <h1 className="font-light text-sm md:text-lg">Explore your favorite destination</h1>
        </div>
        <div className="px-6 md:px-20 relative w-full flex flex-col items-center">
          <button className="mt-6 px-10 md:px-20 py-3 border border-black rounded-lg text-lg font-medium hover:bg-gray-100 w-full md:w-auto">
            Download Now
          </button>
        </div>
      </div>
      <div className="flex justify-end gap-4 text-gray-600 p-4">
  <CiSearch className="text-xl cursor-pointer" />
  <IoIosNotifications className="text-xl cursor-pointer" />
</div>


    </>
  );
};

export default Home;
