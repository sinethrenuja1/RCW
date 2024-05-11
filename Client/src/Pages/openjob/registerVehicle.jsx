

import ShopHeader from "../../Components/shopheader";

function RegisterVehicle() {
    return (
        <div >
            <div className="mb-5"><ShopHeader pageName="Register Vehicle" /></div>
            <div>
                <div className="flex mt-12   justify-center ">
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
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="category" className="text-black w-full">
                                        Category:
                                    </label>
                                    <input
                                        id="category"
                                        type="text"
                                        placeholder="Enter Vehicle Category"
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
                                        <label htmlFor="vehicleNumber" className="text-black w-full">
                                            Contact Number:
                                        </label>
                                        <input
                                            id="vehicleNumber"
                                            type="text"
                                            placeholder="Enter Contact (0777123456)"
                                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Search</button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="model" className="text-black w-full">
                                        First Name:
                                    </label>
                                    <input
                                        id="model"
                                        type="text"
                                        placeholder="Enter First name"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="category" className="text-black w-full">
                                        Last Name:
                                    </label>
                                    <input
                                        id="category"
                                        type="text"
                                        placeholder="Enter Last name"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex flex-wrap justify-between mb-3">
                                    <label htmlFor="make" className="text-black w-full">
                                        Address
                                    </label>
                                    <input
                                        id="make"
                                        type="text"
                                        placeholder="Enter Address"
                                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                                    />
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3">Cancel</button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Register</button>

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
