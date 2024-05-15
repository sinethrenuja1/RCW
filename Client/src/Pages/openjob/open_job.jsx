

import Garage from "../../images/openjob.png";
import ShopHeader from "../../Components/shopheader";


function open_job() {
    return (
        <div className="flex flex-col min-h-screen justify-center ">
            <ShopHeader pageName="Open Job Card"/>
        <div className="flex items-center justify-center min-h-screen">
            
            {/* Left Column */}
            <div className="flex justify-center items-center w-1/2">
                <img
                    className="max-w-md h-auto rounded-lg shadow-md"
                    src={Garage}
                    alt="Car with people around it"
                />
            </div>
            {/* Right Column */}
            <div className="flex flex-col justify-center items-center w-1/2">
                {/* Input Field */}
                <div className="mb-6">
                    <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                    <input
                        id="vehicleNumber"
                        type="text"
                        placeholder="Enter Vehicle Number"
                        className="w-full px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                {/* Button */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 mb-5"
                >
                    Open Job
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                    Register Vehicle
                </button>
            </div>
            
        </div>
        </div>
    );
}

export default open_job;



