import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { useState } from "react";


function AddServices({ jobcard_id }) {
    const location = useLocation();
    
    const [formData] = useState({
        veh_num: location.state?.veh_num || '',
        jobcard_id: jobcard_id || '', // Add jobcard_id as a state
        mileage: location.state?.mileage || '',
        supervisor: location.state?.supervisor || ''
    });


    return (
        <div className="px-5 pt-4">
            <form className="flex items-center gap-4">
                <div className="flex flex-col">
                    <label htmlFor="veh_num" className="text-black">Vehicle Number:</label>
                    <input
                        id="veh_num"
                        type="text"
                        value={formData.veh_num}
                        readOnly
                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="jobcard_id" className="text-black">Job Card ID:</label>
                    <input
                        id="jobcard_id"
                        type="text"
                        value={formData.jobcard_id}
                        readOnly
                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="mileage" className="text-black">Mileage:</label>
                    <input
                        id="mileage"
                        type="text"
                        value={formData.mileage}
                        readOnly
                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="supervisor" className="text-black">Supervisor:</label>
                    <input
                        id="supervisor"
                        type="text"
                        value={formData.supervisor} // Display supervisor value
                        readOnly
                        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue"
                    />
                </div>
            </form>
            <div className="mt-8">
                <div className="shadow-md bg-gray-100 rounded-lg p-3 mb-8">
                    <h2 className="text-lg font-bold text-black">Add a Service</h2>
                    <div className="mt-1">
                        <div className="flex space-x-4">
                            <div className="flex items-center w-1/2">
                                <label htmlFor="serviceName" className="mr-2 text-black">Service name:</label>
                                <input
                                    id="serviceName"
                                    type="text"
                                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
                                />
                            </div>
                            <div className="flex items-center w-1/4">
                                <label htmlFor="price" className="mr-2 text-black">Price:</label>
                                <input
                                    id="price"
                                    type="text"
                                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
                                />
                            </div>
                            <div className="flex items-center w-1/4">
                                <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label>
                                <input
                                    id="quantity"
                                    type="text"
                                    placeholder="Enter Quantity"
                                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
                                />
                            </div>
                            
                        </div>
                        <div className="flex justify-end gap-4 mt-2">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Clear</button>
                            <button className="bg-lightblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Service</button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-bold text-black">Services Table</h2>
                    <table className="w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 bg-gray-200 text-gray-700">Service Name</th>
                                <th className="px-1 py-2 bg-gray-200 text-gray-700">Quantity</th>
                                <th className="px-1 py-2 bg-gray-200 text-gray-700">Price</th>
                                <th className="px-1 py-2 bg-gray-200 text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Service 1</td>
                                <td className="border px-4 py-2">3</td>
                                <td className="border px-4 py-2">3</td>
                                <td className="border px-1 py-1 flex justify-center">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Service 2</td>
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">3</td>
                                <td className="border px-2 py-1 flex justify-center">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

AddServices.propTypes = {
    jobcard_id: PropTypes.string.isRequired,
};

export default AddServices;
