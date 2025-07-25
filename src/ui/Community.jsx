import React from 'react'
import travler from '../assets/images/traverl.png'
import k from "../assets/images/k.png"
import Button from './Button'
const Community = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center px-4 md:px-0 pt-6 md:pt-12 text-center">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug">
                    Heaven for <span className="bg-blue-300 px-2 py-1 rounded font-serif">SOLO Travelers</span>
                </h1>
                <h2 className="mt-3 text-base sm:text-lg md:text-xl font-serif max-w-2xl">
                    Discover a world of adventure and connection tailored for solo explorers!
                </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-7 mt-5 ">
                <div className="div">
                    <img src={travler} alt="" className='w-80  shadow-white transform hover:scale-105 transition-transform duration-500'  />
                    <h1 className='  flex justify-center items-center text-xl md:text-3xl font-bold text-blue-600'>Connect</h1>
                </div>
                <div className="div">
                    <img src={k} alt="" className='shadow-white transform hover:scale-105 transition-transform duration-500' />
                    <h1 className=' flex justify-center items-center text-xl md:text-3xl font-bold text-blue-600'>Community</h1>
                </div>

            </div>
            <div className="flex justify-center items-center">
                <Button />
            </div>
        </>
    )
}
export default Community;
