import React from 'react'
import man7 from "../assets/images/man7.png"
import man9 from "../assets/images/man9.png"
import man8 from "../assets/images/man8.png"
const Community2 = () => {
    return (
        <div className="flex flex-col lg:flex-row p-6 lg:p-24 justify-between items-center ">
            <div className="flex flex-col text-center lg:text-left">
                <h1 className='text-3 md:text-6xl'>Join the </h1>
                <h1 className='py-4 text-5xl lg:text-7xl'> <span className='bg-green-400 p-1'>EarthGo</span>Community</h1>
                <h1 className='font-light my-6'>Join a vibrant community of travelers
                    connect, share, and explore the world together</h1>
                <button className="mt-10 lg:mt-24 w-full lg:w-[40%] py-3 border border-black  text-lg font-medium hover:bg-gray-100">
                    Download Now
                </button>
            </div>
            <div className="  relative   flex  gap-3 p-16">
                <div className="div">
                    <img src={man7} alt="" />
                </div>
                <div className="py-16">
                    <img src={man8} alt="" />
                </div>
                <div className="absolute py-46 px-18">
                    <img src={man9} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Community2
