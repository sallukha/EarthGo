 import React from 'react';
import man7 from "../assets/images/man7.png";
import man9 from "../assets/images/man9.png";
import man8 from "../assets/images/man8.png";
import Button from "../ui/Button"
const Community2 = () => {
    return (
        <div className="flex flex-col lg:flex-row mt-4 p-6 lg:p-24 justify-between items-center gap-10">
            <div className="flex flex-col text-center lg:text-left p-4 lg:p-12">
                <h1 className='text-3xl md:text-6xl font-bold'>
                    Join the <span className='bg-blue-300 font-serif text-white px-2 py-1 rounded'>EarthGo</span> Community!
                </h1>
                <p className='font-serif my-4 text-gray-700 text-lg md:text-xl'>
                    Connect with a vibrant community of travelers, share adventures, and explore the world together!
                </p>
            </div>
            <div className="relative grid grid-cols-2 gap-4 lg:gap-8">
                <img
                    src={man7}
                    alt="Traveler 1"
                    className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 mr-44"
                />
                <img
                    src={man8}
                    alt="Traveler 2"
                    className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ml-7 mt-24"
                />
                <img
                    src={man9}
                    alt="Traveler 3"
                    className="rounded-xl shadow-lg col-span-2 transform hover:scale-105 transition-transform duration-500  md:ml-24" 
                />
            </div>
        </div>
    );
};

export default Community2;
