import React from 'react';
 import trav from "../assets/images/tarv.png"
 import trav2 from "../assets/images/traverl.png"
const Hero = () => {
    return (
        <>
          <div className="flex justify-center items-center">
            <img src={trav} alt="" />
          </div>
          <div className="flex flex-col md:flex-row  justify-center items-center gap-44">
                <div className="div">
                <h1 className='text-xl md:text-6xl'>Explore and</h1>
                <h1>Find Adventure Trips</h1>
                 <h1>Discover, Connect, and Experience with EarthGo!</h1>
                </div>
                <div className="div">
                    <img src={trav2} alt="" />
                </div>
          </div>
        </>
    );
};
export default Hero;
