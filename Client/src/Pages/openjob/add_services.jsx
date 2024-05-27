import { useLocation } from "react-router-dom";
import PropTypes from "prop-types"; 
import { useEffect, useState } from "react";
import axios from "axios";


function AddServices({ jobcard_id}) {
    const location = useLocation();
    const [supervisor, setSupervisor] = useState([]);
    const veh_num = location.state?.veh_num;

    useEffect(() => {
        const fetchSupervisors = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/jobRoutes/loadSupervisors');
                setSupervisor(response.data);
            } catch (error) {
                console.error('Error fetching supervisors:', error);
            }
        };

        fetchSupervisors();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 pt-4">
            <div className="col-span-1">
                    <div className="px-5 pt-4 mb-5 border bg-gray-100 rounded mt-24">
                        <div className="p-2 w-auto">
                            <label htmlFor="vehicleNumber" className="text-black gap-3">
                                Vehicle Number:
                            </label>
                            <input
                                id="veh_num"
                                type="text"
                                value={veh_num}
                                readOnly
                                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-64"
                            />
                        </div>
                        <div className="p-2 w-auto">
                            <label htmlFor="jobcard_id" className="text-black gap-3">
                                Job Card ID:
                            </label>
                            <input
                                id="jobcard_id"
                                type="text"
                                value={jobcard_id}
                                readOnly
                                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-64"
                            />
                        </div>
                        <div className="p-2 w-auto">
                            <label htmlFor="mileage" className="text-black gap-3">
                                Mileage:
                            </label>
                            <input
                                id="mileage"
                                placeholder="Enter Mileage"
                                type="text"
                                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-64"
                            />
                        </div>
                        <div className="p-2 w-auto">
                            <label htmlFor="supervisor" className="text-black gap-3">
                                Supervisor:
                            </label>
                            <select
                                id="supervisor"
                                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-64">
                                <option value="">Select a supervisor</option>
                                {supervisor.map((supervisor, index) => (
                                    <option key={index} value={supervisor.u_name}>{supervisor.u_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="shadow-md">
                        <div className="mb-8 bg-gray-100 rounded-lg p-3">
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
                                        <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label>
                                        <input
                                            id="quantity"
                                            type="text"
                                            placeholder="Enter Quantity"
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
                                </div>
                                <div className="flex justify-end gap-4 mt-2">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Clear</button>
                                    <button className="bg-lightblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Service</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-8">
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
            </div>
        </div>
    );
}
AddServices.propTypes = {
    jobcard_id: PropTypes.string.isRequired,
};

export default AddServices;
