import React from 'react'
import { IoIosNotifications } from "react-icons/io";
const AiPlaner = () => {
    return (
        <div className='w-full bg-blue-300 h-full flex flex-col items-center py-10 mt-14'>
            <div className="flex justify-between items-center w-[90%] md:w-[50%] mb-5">
                <h1 className="text-white text-lg font-semibold">Get Notification on Email</h1>
                <div className="rounded-full bg-white  p-1">
                    <IoIosNotifications className=" text-2xl" />
                </div>
            </div>
            <div className="flex flex-col w-[90%] md:w-[50%] space-y-4">
                <input type="text" placeholder="Name"
                    className="p-3 border rounded-md bg-white placeholder:font-bold" />
                <input type="email" placeholder="Email" className="p-3 border rounded-md bg-white font-bold " />
                <input type="text" placeholder="Message" className="p-3 border rounded-md h-[100px] bg-white font-bold" />
                <div className="flex justify-end">
                    <button className="bg-white px-6 py-2 text-black font-medium rounded-md shadow-md hover:bg-gray-200">
                        Submit
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AiPlaner;
