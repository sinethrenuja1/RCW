import { useState } from "react";
import axios from "axios";
import ShopHeader from "../../Components/shopheader";

function RegisterVehicle() {
    const [veh_num, setVehNum] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [engine_type, setEngineType] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [address, setAddress] = useState("");

    const handleRegister = async () => {
        try {
            // Register Customer
            const customerResponse = await axios.post('http://localhost:8800/api/jobRoutes/registerCustomer', {
                contact_number,
                first_name,
                last_name,
                address
            });

            // Register Vehicle
            const vehicleResponse = await axios.post('http://localhost:8800/api/jobRoutes/registerVehicle', {
                veh_num,
                make,
                model,
                engine_type,
                contact_number
            });

            if (customerResponse.status === 201 && vehicleResponse.status === 201) {
                alert("Vehicle and Customer registered successfully");
                console.log("Vehicle and Customer registered successfully");
            }
        } catch (error) {
            console.error("Error registering vehicle and customer", error);
            alert("Failed to register vehicle and customer");
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/jobRoutes/searchCustomer/${contact_number}`);

            if (response.status === 200) {
                const customer = response.data;
                setFirstName(customer.first_name);
                setLastName(customer.last_name);
                setAddress(customer.address);
                console.log(customer);
            } else {
                console.error('Customer not found');
            }
        } catch (error) {
            console.error('Error searching for customer', error.response||error);
        }
    };

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
                                        placeholder="AAA-0000"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={veh_num}
                                        onChange={(e) => setVehNum(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="make" className="text-black w-full">
                                        Make:
                                    </label>
                                    <input
                                        id="make"
                                        type="text"
                                        placeholder="Eg. Toyota, Honda, etc."
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={make}
                                        onChange={(e) => setMake(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="model" className="text-black w-full">
                                        Model:
                                    </label>
                                    <input
                                        id="model"
                                        type="text"
                                        placeholder="Eg. Corolla, Civic, etc."
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={model}
                                        onChange={(e) => setModel(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="engine_type" className="text-black w-full">
                                        Engine Type:
                                    </label>
                                    <select
                                        id="engine_type"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={engine_type}
                                        onChange={(e) => setEngineType(e.target.value)}
                                    >
                                        <option value="" disabled>Select Engine Type</option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
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
                                            placeholder="Enter Contact (0777123456)"
                                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                            value={contact_number}
                                            onChange={(e) => setContactNumber(e.target.value)}
                                        />
                                    </div>
                                     <div className="flex justify-end">
                                         <button 
                                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                             onClick={handleSearch}
                                         >
                                             Search
                                         </button>
                                    </div> 
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="first_name" className="text-black w-full">
                                        First Name:
                                    </label>
                                    <input
                                        id="first_name"
                                        type="text"
                                        placeholder="Enter First name"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={first_name}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="last_name" className="text-black w-full">
                                        Last Name:
                                    </label>
                                    <input
                                        id="last_name"
                                        type="text"
                                        placeholder="Enter Last name"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={last_name}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="address" className="text-black w-full">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        type="text"
                                        placeholder="Enter Address"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3">
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleRegister}
                                    >
                                        Register
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
