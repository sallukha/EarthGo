import React, { useState } from "react";
import logo from "../assets/images/earth.png";
const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleOpen = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-white ">
            <h1 className="text-2xl font-bold">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </h1>
            <div className="hidden md:flex items-center gap-6">
                <ul className="flex gap-6 text-lg font-light">
                    {["About", "Trips", "Ai", "Community"].map((item) => (
                        <li key={item} className="hover:text-yellow-500 cursor-pointer transition">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <button className="md:hidden text-2xl" onClick={handleOpen}>
                ☰
            </button>
            {isOpenMenu && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 md:hidden">
                    <ul className="flex flex-col gap-4 text-lg font-light">
                        {["About", "Trips", "Ai", "Community"].map((item) => (
                            <li key={item} className="hover:text-yellow-500 cursor-pointer transition">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
