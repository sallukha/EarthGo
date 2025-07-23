import React, { useState } from "react";
import logo from "../assets/images/earth.png";

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpen = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
                <ul className="flex gap-8 text-lg font-medium text-gray-700">
                    {["About", "Trips", "AI", "Community"].map((item) => (
                        <li
                            key={item}
                            className="hover:text-green-600 transition-colors cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <button
                className="md:hidden text-3xl text-gray-700 focus:outline-none"
                onClick={handleOpen}
            >
                ☰
            </button>
            {isOpenMenu && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden animate-slideDown">
                    <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700">
                        {["About", "Trips", "AI", "Community"].map((item) => (
                            <li
                                key={item}
                                className="hover:text-green-600 transition-colors cursor-pointer"
                            >
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
