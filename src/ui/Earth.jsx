 import React from 'react';
import home from "../assets/images/home.png"
import bus from "../assets/images/bus.png"
const Earth = () => {
    return (
        <div className='w-full bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12'>
            <div className="text-center mb-8">
                <h1 className='text-3xl md:text-5xl font-bold text-gray-800'>Join</h1>
                <h2 className='mt-4 text-2xl md:text-4xl font-semibold bg-blue-500 text-white px-4 py-2 rounded shadow'>
                    EarthGo as a Partner
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex justify-center items-center overflow-hidden">
                        <img
                            src={bus}  
                            alt="Travel Partner"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">Travel Partner</h3>
                </div>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <div className="w-24 h-24 rounded-full border-4 border-green-500 flex justify-center items-center overflow-hidden">
                        <img
                            src={home} 
                            alt="Stay Partner"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">Stay Partner</h3>
                    <p className="text-gray-600 mt-2 text-center">
                        Hotels, homestays, or resorts
                    </p>
                </div>
            </div>
            <p className="font-serif  mt-10 max-w-3xl text-center text-gray-700 px-4">
                EarthGo connects passionate travel providers with a wide network of explorers across India. 
                Whether you plan adventures or host them, we make it easier for you to grow — with zero upfront cost.
            </p>
        </div>
    );
}

export default Earth;
