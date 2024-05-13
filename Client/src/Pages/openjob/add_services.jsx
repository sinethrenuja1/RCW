

// function CreateJobCard() {
//     return (
//         <div>

//             <div className="px-5 pt-4 flex gap-16 mb-5">
//                 <div className=" p-2  border border-black w-auto rounded">
//                     <label htmlFor="vehicleNumber" className="text-black gap-3">
//                         Vehicle Number:
//                     </label>
//                     <input
//                         id="vehicleNumber"
//                         type="text"
//                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500  w-64"
//                     />
//                 </div>
//                 <div className=" p-2  border border-black w-auto rounded justify-center">
//                     <label htmlFor="mileage" className="text-black gap-3">
//                         Mileage:
//                     </label>
//                     <input
//                         id="vehicleNumber"
//                         placeholder="Enter Mileage"
//                         type="text"
//                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500  w-64"
//                     />
//                 </div>
//                 <div className=" p-2  border border-black w-auto rounded justify-end">
//                     <label htmlFor="jobcard_id" className="text-black gap-3">
//                         Job Card ID:
//                     </label>
//                     <input
//                         id="vehicleNumber"
//                         type="text"
//                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500  w-64"
//                     />
//                 </div>

//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 pt-4">
//                 {/* Left Column - Services and Parts */}
//                 <div className="col-span-1">
//                     <div className=" shadow-md ">
//                         {/* Add Service */}
//                         <div className="mb-8 bg-gray-100 rounded-lg p-4">
//                             <h2 className="text-lg font-bold text-black">Add a Service</h2>
//                             <div className="flex flex-col space-y-4 mt-4">
//                                 <div className="flex items-center">
//                                     <label htmlFor="serviceName" className="mr-2 text-black">Service name:</label>
//                                     <input
//                                         id="serviceName"
//                                         type="text"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <div className="flex items-center">
//                                     <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label>
//                                     <input
//                                         id="quantity"
//                                         type="text"
//                                         placeholder="Enter Quantity"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Add Service</button>
//                             </div>
//                         </div>
//                         {/* Change Parts */}
//                         <div className="bg-gray-100 rounded-lg p-4">
//                             <h2 className="text-lg font-bold text-black">Change Parts</h2>
//                             <div className="flex flex-col space-y-4 mt-4">
//                                 <div className="flex items-center">
//                                     <label htmlFor="partName" className="mr-2 text-black">Part name:</label>
//                                     <input
//                                         id="partName"
//                                         type="text"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <div className="flex items-center">
//                                     <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label>
//                                     <input
//                                         id="quantity"
//                                         type="text"
//                                         placeholder="Enter Quantity"
//                                         className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
//                                     />
//                                 </div>
//                                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Add Part</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Right Column - Tables */}
//                 <div className="col-span-2">
//                     {/* Table 1 */}
//                     <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-8">
//                         <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-8">
//                             <h2 className="text-lg font-bold text-black">Services Table</h2>
//                             <table className="w-full mt-4">
//                                 <thead>
//                                     <tr>
//                                         <th className="px-4 py-2 bg-gray-200 text-gray-700">Service Name</th>
//                                         <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td className="border px-4 py-2">Service 1</td>
//                                         <td className="border px-4 py-2">3</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="border px-4 py-2">Service 2</td>
//                                         <td className="border px-4 py-2">1</td>
//                                     </tr>
//                                     {/* Add more rows as needed */}
//                                 </tbody>
//                             </table>
//                         </div>

//                     </div>
//                     {/* Table 2 */}
//                     <div className="bg-gray-100 rounded-lg shadow-md p-4">
//                         <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-8">
//                             <h2 className="text-lg font-bold text-black">Parts Table</h2>
//                             <table className="w-full mt-4">
//                                 <thead>
//                                     <tr>
//                                         <th className="px-4 py-2 bg-gray-200 text-gray-700">Part Name</th>
//                                         <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td className="border px-4 py-2">Part 1</td>
//                                         <td className="border px-4 py-2">5</td>
//                                     </tr>
//                                     <tr>
//                                         <td className="border px-4 py-2">Part 2</td>
//                                         <td className="border px-4 py-2">2</td>
//                                     </tr>
//                                     {/* Add more rows as needed */}
//                                 </tbody>
//                             </table>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CreateJobCard;




function CreateJobCard() {
    return (
        <div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 pt-4">
                <div className="col-span-2">
                    <div className=" shadow-md ">
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
                                    <div className="flex items-center w-1/2">
                                        <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label>
                                        <input
                                            id="quantity"
                                            type="text"
                                            placeholder="Enter Quantity"
                                            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue w-full"
                                        />
                                    </div>
                                </div>
                                <div className=" flex justify-end gap-4 mt-2">
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">Clear</button>
                                    <button className="bg-lightblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ">Add Service</button>
                                </div>
                            </div>
                        </div>
                        {/* Table 1 */}
                        <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-8">
                            <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-8">
                                <h2 className="text-lg font-bold text-black">Services Table</h2>
                                <table className="w-full mt-4">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Service Name</th>
                                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Quantity</th>
                                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">Service 1</td>
                                            <td className="border px-4 py-2">3</td>
                                            <td className="border px-2 py-1 flex justify-center">
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded">
                    Delete
                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">Service 2</td>
                                            <td className="border px-4 py-2">1</td>
                                            <td className="border px-2 py-1 flex justify-center">
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded">
                    Delete
                </button>
                                            </td>
                                        </tr>
                                        {/* Add more rows as needed */}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="px-5 pt-4  mb-5 border bg-gray-100 rounded mt-24">

                        <div className=" p-2   w-auto ">
                            <label htmlFor="vehicleNumber" className="text-black gap-3">
                                Vehicle Number:
                            </label>
                            <input
                                id="vehicleNumber"
                                type="text"
                                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue  w-64"
                            />
                        </div>
                        <div className=" p-2 w-auto ">
                            <label htmlFor="jobcard_id" className="text-black gap-3">
                                Job Card ID:
                            </label>
                            <input
                                id="vehicleNumber"
                                type="text"
                                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue  w-64"
                            />
                        </div>
                        <div className=" p-2 w-auto ">
                            <label htmlFor="mileage" className="text-black gap-3">
                                Mileage:
                            </label>
                            <input
                                id="vehicleNumber"
                                placeholder="Enter Mileage"
                                type="text"
                                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lightblue   w-64"
                            />
                        </div>
                        

                    </div>


                </div>



                {/* Right Column - Tables */}

            </div>
        </div>
    );
}

export default CreateJobCard;