import React from 'react';
import {Places }from "../json/jsonData"
const PlacesFetch = () => {
    return (
        <div className='p-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold'>Book your <span className='text-[#68C65A]'>Affordable Trips</span></h1>
                    <h2 className='font-light py-4 text-lg'>Book your budget-friendly trips and travel without limits</h2>
                </div>
                <button className=' text-black px-4 py-14 '>See All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {Places.map((item, index) => (
                    <div key={index} className="  overflow-hidden p-4 ">
                        <img src={item.image} alt={item.place} className="w-full h-60 object-cover rounded-lg" />
                        <h1 className="text-xl font-semibold mt-4">{item.place}</h1>
                        <h2 className="text-gray-600 text-lg mt-2">{item.price}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlacesFetch;
