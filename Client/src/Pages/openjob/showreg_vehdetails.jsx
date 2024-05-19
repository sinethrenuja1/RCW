import ShopHeader from "../../Components/shopheader";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function RegisterVehicle() {
    const location = useLocation();
    const veh_num = location.state?.veh_num;

    const [vehicleDetails, setVehicleDetails] = useState({});
    const [customerDetails, setCustomerDetails] = useState({});

    useEffect(() => {
        // Fetch data from backend API
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8800/api/jobRoutes/loadDetails/${veh_num}`);
                const data = await response.json();
                setVehicleDetails(data.vehicle);
                setCustomerDetails(data.customer);
            } catch (error) {
                console.error('Error fetching vehicle details:', error);
            }
        };
        fetchData();
    }, [veh_num]); // add veh_num as a dependency

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/jobcard');
    }
    


    return (
        <div>
            <div className="mb-5">
                <ShopHeader pageName="Register Vehicle" />
            </div>
            <div>
                <div className="flex mt-12 justify-center">
                    <div className="bg-slate-200 flex justify-center mx-5 py-11 gap-12 rounded-lg">
                        <div className="grid-cols-1 md:grid-cols-2">
                            <div className="col-span-1 bg-gray-50 rounded-lg shadow-md px-4 py-4 mx-7">
                                <h2 className="text-lg font-bold text-black">Vehicle Details</h2>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="veh_num" className="text-black w-full">
                                        Vehicle Number:
                                    </label>
                                    <input
                                        id="veh_num"
                                        type="text"
                                        value={vehicleDetails.veh_num || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="make" className="text-black w-full">
                                        Make:
                                    </label>
                                    <input
                                        id="make"
                                        type="text"
                                        value={vehicleDetails.make || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="model" className="text-black w-full">
                                        Model:
                                    </label>
                                    <input
                                        id="model"
                                        type="text"
                                        value={vehicleDetails.model || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="engine_type" className="text-black w-full">
                                        Engine Type:
                                    </label>
                                    <input
                                        id="engine_type"
                                        type="text"
                                        value={vehicleDetails.engine_type || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid-cols-1 md:grid-cols-2">
                            <div className="col-span-1 bg-gray-50 rounded-lg shadow-md px-4 py-4 mx-7">
                                <h2 className="text-lg font-bold text-black">Customer Details</h2>
                                <div className="border p-3 rounded-md bg-slate-100">
                                    <div className="flex flex-wrap justify-between mb-3">
                                        <label htmlFor="contact_number" className="text-black w-full">
                                            Contact Number:
                                        </label>
                                        <input
                                            id="contact_number"
                                            type="text"
                                            value={customerDetails.contact_number || ""}
                                            readOnly
                                            
                                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        />
                                    </div>

                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="first_name" className="text-black w-full">
                                        First Name:
                                    </label>
                                    <input
                                        id="first_name"
                                        type="text"
                                        value={customerDetails.first_name || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="last_name" className="text-black w-full">
                                        Last Name:
                                    </label>
                                    <input
                                        id="last_name"
                                        type="text"
                                        value={customerDetails.last_name || ""}
                                        readOnly
                                        
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="address" className="text-black w-full">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        type="text"
                                        value={customerDetails.address || ""}
                                        readOnly
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">
                                        Open Job
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterVehicle;