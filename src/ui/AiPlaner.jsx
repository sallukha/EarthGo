import React from 'react';
const AiPlaner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
                AI Planner
            </h1>
            <p className="text-gray-500 mb-8 text-center">Coming Soon</p>
            <form className="w-full max-w-md p-6 rounded-lg shadow">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 border  border-gray-400  rounded focus:outline-none focus:ring-2  focus:ring-gray-600"
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full px-4 py-3 border border-gray rounded focus:outline-none focus:ring-2  focus:ring-gray-600"
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="py-3 px-6 p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors font-bold"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <h1 className='text-gray-500 mt-24'>© 2024. All Rights Reserved.
                Terms & Condition</h1>
        </div>
    );
};
export default AiPlaner;
