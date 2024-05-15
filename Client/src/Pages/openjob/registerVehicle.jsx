// import ShopHeader from "../../Components/shopheader";

// function RegisterVehicle() {
//     return (
//         <div >
//             <div className="mb-5"><ShopHeader pageName="Register Vehicle" /></div>
//             <div>
//                 <div className="flex mt-12   justify-center ">
//                     <div className="bg-slate-200 flex justify-center mx-5 py-11 gap-12 rounded-lg">

//                         <div className="grid-cols-1 md:grid-cols-2">
//                             <div className="col-span-1 bg-gray-50 rounded-lg shadow-md px-4 py-4 mx-7">
//                                 <h2 className="text-lg font-bold text-black">Vehicle Details</h2>
//                                 <div className="flex flex-wrap justify-between mb-3">
//                                     <label htmlFor="vehicleNumber" className="text-black w-full">
//                                         Vehicle Number:
//                                     </label>
//                                     <input
//                                         id="vehicleNumber"
//                                         type="text"
//                                         placeholder="AAA-0000"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <div className="flex flex-wrap justify-between mb-3">
//                                     <label htmlFor="make" className="text-black w-full">
//                                         Make:
//                                     </label>
//                                     <input
//                                         id="make"
//                                         type="text"
//                                         placeholder="Eg. Toyota, Honda, etc."
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <div className="flex flex-wrap justify-between mb-3">
//                                     <label htmlFor="model" className="text-black w-full">
//                                         Model:
//                                     </label>
//                                     <input
//                                         id="model"
//                                         type="text"
//                                         placeholder="Eg. Corolla, Civic, etc."
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <div className="flex flex-wrap justify-between mb-3">
//                                     <label htmlFor="category" className="text-black w-full">
//                                         Engine Type:
//                                     </label>
//                                     <select
//                                         id="engine_type"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     >
//                                         <option value="" disabled>Select Engine Type</option>
//                                         <option value="Petrol">Petrol</option>
//                                         <option value="Diesel">Diesel</option>
//                                         <option value="Hybrid">Electric</option>
//                                     </select>
//                                 </div>



//                             </div>
//                         </div>


//                         <div className="grid-cols-1 md:grid-cols-2">
//                             <div className="col-span-1 bg-gray-50 rounded-lg shadow-md px-4 py-4 mx-7">
//                                 <h2 className="text-lg font-bold text-black">Customer Details</h2>
//                                 <div className="border p-3 rounded-md bg-slate-100">
//                                     <div className="flex flex-wrap justify-between mb-3">
//                                         <label htmlFor="vehicleNumber" className="text-black w-full">
//                                             Contact Number:
//                                         </label>
//                                         <input
//                                             id="vehicleNumber"
//                                             type="text"
//                                             placeholder="Enter Contact (0777123456)"
//                                             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                         />
//                                     </div>
//                                     {/* <div className="flex justify-end">
//                                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Search</button>
//                                     </div> */}
//                                 </div>
//                                 <div className="flex flex-wrap justify-between mb-3">
//                                     <label htmlFor="model" className="text-black w-full">
//                                         First Name:
//                                     </label>
//                                     <input
//                                         id="model"
//                                         type="text"
//                                         placeholder="Enter First name"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <div className="flex flex-wrap justify-between mb-3">
//                                     <label htmlFor="category" className="text-black w-full">
//                                         Last Name:
//                                     </label>
//                                     <input
//                                         id="category"
//                                         type="text"
//                                         placeholder="Enter Last name"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <div className="flex flex-wrap justify-between mb-3">
//                                     <label htmlFor="make" className="text-black w-full">
//                                         Address
//                                     </label>
//                                     <input
//                                         id="make"
//                                         type="text"
//                                         placeholder="Enter Address"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <div className="flex justify-end gap-4">
//                                     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3">Cancel</button>
//                                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Register</button>

//                                 </div>


//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default RegisterVehicle;

import  { useState } from "react";
import ShopHeader from "../../Components/shopheader";
import axios from "axios";

function RegisterVehicle() {
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [engineType, setEngineType] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");

    const handleRegister = async () => {
        try {
            // Register Customer
            const customerResponse = await axios.post('http://localhost:8800/api/jobcard/registerCustomer', {
                contact_number: contactNumber,
                first_name: firstName,
                last_name: lastName,
                address: address,
            });

            // Register Vehicle
            const vehicleResponse = await axios.post('http://localhost:8800/api/jobcard/registerVehicle', {
                veh_num: vehicleNumber,
                make: make,
                model: model,
                engine_type: engineType,
                contact_number: contactNumber,
            });

            if (customerResponse.status === 201 && vehicleResponse.status === 201) {
                alert("Vehicle and Customer registered successfully");
            }
        } catch (error) {
            console.error("Error registering vehicle and customer", error);
            alert("Failed to register vehicle and customer");
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
                                    <label htmlFor="vehicleNumber" className="text-black w-full">
                                        Vehicle Number:
                                    </label>
                                    <input
                                        id="vehicleNumber"
                                        type="text"
                                        placeholder="AAA-0000"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={vehicleNumber}
                                        onChange={(e) => setVehicleNumber(e.target.value)}
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
                                        value={engineType}
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
                                        <label htmlFor="contactNumber" className="text-black w-full">
                                            Contact Number:
                                        </label>
                                        <input
                                            id="contactNumber"
                                            type="text"
                                            placeholder="Enter Contact (0777123456)"
                                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                            value={contactNumber}
                                            onChange={(e) => setContactNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="firstName" className="text-black w-full">
                                        First Name:
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter First name"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="lastName" className="text-black w-full">
                                        Last Name:
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter Last name"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        value={lastName}
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
