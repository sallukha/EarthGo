import React from 'react'
import dot from "../assets/images/doted.png"
import man5 from "../assets/images/man5.png"
import man6 from "../assets/images/man6.png"
const Community = () => {
    return (
        <>
            <div className='flex flex-col  justify-center items-center text-center'>
                <h1 className='text-4xl md:text-6xl'>Heaven for
                    <span className='bg-blue-400 ml-2 p-1'> SOLO Travelers</span>
                </h1>
                <h1 className='font-light my-5'>Solo Travelers Paradise</h1>
            </div>
 
            <div className="relative w-full h-[600px] flex justify-center items-center overflow-visible py-7 ">
                <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden py-7">
                    <div
                        className="absolute w-[120%] h-[120%] bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url(${dot})`,
                            backgroundSize: "30%",  
                            backgroundPosition: "center",
                            transform: "rotate(10deg) translateY(10%)", 
                            transformOrigin: "center",
                        }}
                    ></div>
                    <div className=" p-24 justify-center  flex flex-col md:flex-row md:p-2  absolute left-0 top-[40%] -translate-y-1/2  gap-4 pl-10 items-center md:mx-60 ">
                        <h1 className="text-2xl font-semibold">Connect</h1>
                        <img src={man5} alt="Traveler" className="max-w-[300px] md:max-w-[400px] w-full h-auto" />
                        <div className="flex flex-col">
                            
                            <img src={man6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Community;
