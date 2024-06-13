import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Garage from "../../images/openjob.png";
import ShopHeader from "../../Components/shopheader";


function OpenJob() {
    const [veh_num, setVehicleNumber] = useState("");
    const navigate = useNavigate();

    const handleOpenJob = async () => {
        try{
            const response = await fetch(`http://localhost:8800/api/jobRoutes/checkVehicle/${veh_num}`);
            const data = await response.json();

            if(data.exists){
               navigate("/ShowVeh_details", { state: { veh_num } });
               
            }else{
                navigate("/register");
            }
        }catch(error){
            console.error('Error checking vehicle:', error);
        }
    }

    return (
        <div className="flex bg-blue-50 flex-col min-h-screen justify-center ">
            <div>
            <ShopHeader pageName="Open Job Card"/>
            </div>
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
                <div className="mb-6  bg-blue-50">
                    <label htmlFor="vehicleNumber" className="text-gray-700  bg-blue-50">Enter Vehicle Number:</label>
                    <input
                        id="vehicleNumber"
                        type="text"
                        placeholder="Enter Vehicle Number"
                        className="w-full px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={veh_num}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                    />
                </div>
                {/* Button */}
                <button
                onClick={handleOpenJob}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 mb-5"
                >
                    Open Job
                </button>
                
            </div>
            
        </div>
        </div>
    );
}

export default OpenJob;


