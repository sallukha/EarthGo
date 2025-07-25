import React from "react";
import { Places } from "../json/jsonData";
import { ArrowBigRight } from "lucide-react";
const PlacesFetch = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-6xl font-bold">
                        Book your <span className="text-[#68C65A]">Affordable Trips</span>
                    </h1>
                    <h2 className="font-light py-2 md:py-4 text-base md:text-lg">
                        Book your budget-friendly trips and travel without limits
                    </h2>
                </div>
                <div className="flex items-center gap-2">
                    <button className="text-black px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300">
                        See All
                    </button>
                    <ArrowBigRight className="w-6 h-6 text-black" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {Places.map((item, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-500"
                    >
                        <img
                            src={item.image}
                            alt={item.place}
                            className="w-full h-60 object-cover rounded-t-xl transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4 bg-white">
                            <h1 className="text-lg md:text-xl font-semibold">{item.place}</h1>
                            <h2 className="text-gray-600 text-base md:text-lg mt-1">
                                {item.price}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PlacesFetch;
