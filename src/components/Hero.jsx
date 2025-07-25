import React from 'react';
import trav from "../assets/images/tarv.png"
import trav2 from "../assets/images/traverl.png"
import mans from "../assets/images/mans.png"
import mans2 from "../assets/images/mans1.png"
import mans3 from "../assets/images/mans2.png"
import mans4 from "../assets/images/mans3.png"
import Button from '../ui/Button';
const Hero = () => {
  const manImages = [mans, mans2, mans3, mans4];  
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={trav} alt=""  />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28">
        <div className="text-center md:text-left space-y-3 mt-5">
          <h1 className="text-3xl md:text-6xl font-bold">Explore  <span className="text-green-300">and</span></h1>
          <h2 className="text-xl md:text-4xl font-semibold">
            Find Adventure Trips
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover, Connect, and Experience with <span className="font-bold">EarthGo!</span>
          </p>
          <Button/>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={trav2}
            alt="Traveler"
            className="w-44 md:w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
          <div className="grid grid-cols-2 gap-4">
            {manImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Man ${index + 1}`}
                className="w-28 md:w-32 rounded-md shadow-md  transform transition duration-500 ease-in-out hover:scale-110 *:
                 "
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
