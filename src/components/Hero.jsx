import React from 'react';
import mount from "../assets/images/mount.png";
import sun from "../assets/images/sun.png";
import man from "../assets/images/man.png";
import man2 from "../assets/images/man2.png";
import boy from "../assets/images/boy.png"
import arrow from "../assets/images/arrow.png"
const Hero = () => {
    return (
        <>
            <div
                className=" p-2 gap-3   flex items-end justify-between lg:px-20  relative h-[700px] bg-cover bg-center overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-no-repeat bg-center mb-20"
                    style={{
                        backgroundImage: `url(${arrow})`,
                        backgroundSize: "50% auto",
                        backgroundPosition: "center",
                        transform: "rotate(10deg)",
                        transformOrigin: "center",
                        overflow: "visible",
                        width: "120%", 
                        height: "120%", 
                        left: "-10%", 
                        top: "-15%",
                    }}
                ></div>
                <div className="flex flex-col gap-4  text-center lg:text-left pb-12 mt-3">
                    <div className="mt-44 ">
                        <h1 className="text-3xl lg:text-7xl ">We are connecting</h1>
                        <h1 className="bg-green-300 pt-5 text-2xl lg:text-5xl p-2 text-white mt-10 font-bold">
                            Travelers across Globe
                        </h1>
                    </div>
                    <div className="">
                        <img src={boy} alt="boy" className="" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 ml-7">
                    <img src={mount} alt="mountain" className="w-full max-w-md" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row p-6 lg:p-24 justify-between items-center">
                <div className="flex flex-col text-center lg:text-left">
                    <h1 className='text-5xl lg:text-7xl'> <span className='bg-blue-500 text-white px-4 lg:px-7'>Explore</span> and </h1>
                    <h1 className='py-4 text-5xl lg:text-7xl'>find Adventures Trips</h1>
                    <p className='font-light'>Discover, Connect, and Experience with</p>
                    <p className='font-light'>Earth Go</p>
                    <button className="mt-10 lg:mt-24 w-full lg:w-[40%] py-3 border border-black  text-lg font-medium hover:bg-gray-100">
                        Download Now
                    </button>
                </div>
                <div className="  relative   flex  gap-3">
                    <div className="div">
                        <img src={sun} alt="" />
                    </div>
                    <div className="py-16">
                        <img src={man} alt="" />
                    </div>
                    <div className="absolute py-46 px-18">
                        <img src={man2} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;
