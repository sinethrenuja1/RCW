import Garage from "../../images/openjob.png"
import ShopHeader from "../../Components/shopheader"

function registerVehicle() {
    return (
        <div className="fixed">
            <ShopHeader pageName="Register Vehicle"/>
            
            <div className="flex items-center  min-h-screen">
                <div className="grid grid-cols-3">
                    <div className=" col-span-1 flex items-center justify-center">
                        <img src={Garage} alt="Car with people around it" />
                    </div>
                    <div className="col-span-2 gap-7 px-7">
                        <div className="flex justify-center text-3xl my-4">
                            Crete new Profile
                        </div>
                        <div>
                            <div className="mb-6">
                                <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                                <input
                                    id="vehicleNumber"
                                    type="text"
                                    placeholder="Enter Vehicle Number"
                                    className="w-2/3 px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                                <input
                                    id="vehicleNumber"
                                    type="text"
                                    placeholder="Enter Vehicle Number"
                                    className="w-2/3 px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                                <input
                                    id="vehicleNumber"
                                    type="text"
                                    placeholder="Enter Vehicle Number"
                                    className="w-2/3 px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                                <input
                                    id="vehicleNumber"
                                    type="text"
                                    placeholder="Enter Vehicle Number"
                                    className="w-2/3 px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                                <input
                                    id="vehicleNumber"
                                    type="text"
                                    placeholder="Enter Vehicle Number"
                                    className="w-2/3 px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                                <input
                                    id="vehicleNumber"
                                    type="text"
                                    placeholder="Enter Vehicle Number"
                                    className="w-2/3 px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vehicleNumber" className="text-gray-700">Enter Vehicle Number:</label>
                                <input
                                    id="vehicleNumber"
                                    type="text"
                                    placeholder="Enter Vehicle Number"
                                    className="w-2/3 px-4 py-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default registerVehicle