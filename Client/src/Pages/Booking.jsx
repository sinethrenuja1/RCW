
import Nav_bar from "../Components/home_nav";

function Booking() {
    return (
        <div >
            <div><Nav_bar /> </div>
            
            <div className="container mx-auto p-20 w-3/4 mt-8">
                <form className="grid grid-cols-2 gap-4 pt-15">
                    {/* Name and Phone Number */}
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 font-bold">
                            Name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="phone" className="block mb-2 font-bold">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Vehicle Information */}
                    <div className="col-span-1">
                        <label htmlFor="vehicleType" className="block mb-2 font-bold">
                            Vehicle Type
                        </label>
                        <select id="vehicleType" className="w-full p-2 border rounded">
                            <option value="">Select</option>
                            <option value="car">Car</option>
                            <option value="truck">Truck</option>
                            {/* Other options */}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="vehicleNumber" className="block mb-2 font-bold">
                            Vehicle Number
                        </label>
                        <input
                            type="text"
                            id="vehicleNumber"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Select Services */}
                    {/* Select Services with Checkboxes */}
                    <div className="col-span-2">
                        <label className="block mb-2 font-bold">Select Services</label>
                        <div className="flex flex-wrap">
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="bodyWash" className="mr-2" />
                                <label htmlFor="bodyWash">Body Wash</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="underWash" className="mr-2" />
                                <label htmlFor="underWash">Under Wash</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="lubricantService" className="mr-2" />
                                <label htmlFor="lubricantService">Lubricant Service</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="underWax" className="mr-2" />
                                <label htmlFor="underWax">Under Carriage Wax Spray</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="interiorCleaning" className="mr-2" />
                                <label htmlFor="interiorCleaning">Interior Cleaning</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="bodyWax" className="mr-2" />
                                <label htmlFor="bodyWax">Body Wax</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="cutandpolish" className="mr-2" />
                                <label htmlFor="cutandpolish">Cut & Polish</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="glasspolish" className="mr-2" />
                                <label htmlFor="glasspolish">Glass Polishing</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="engineCleanup" className="mr-2" />
                                <label htmlFor="engineCleanup">Engine Room Cleanup</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="leatherTreatment" className="mr-2" />
                                <label htmlFor="leatherTreatment">Leather Treatment</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="acidRain" className="mr-2" />
                                <label htmlFor="acidRain">Acid Rain Removing</label>
                            </div>                            
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="machineWax" className="mr-2" />
                                <label htmlFor="machineWax">Machine Wax</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="siliconSpray" className="mr-2" />
                                <label htmlFor="siliconSpray">Silicon Spray</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="plasticCondition" className="mr-2" />
                                <label htmlFor="plasticCondition">Plastic Condition</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="scanning" className="mr-2" />
                                <label htmlFor="scanning">Vehicle Scanning</label>
                            </div>
                            {/* Add more checkboxes for other services */}
                        </div>
                    </div>


                    {/* Branch and Date/Time */}
                    <div className="col-span-1">
                        <label htmlFor="branch" className="block mb-2 font-bold">
                            Branch
                        </label>
                        <select id="branch" className="w-full p-2 border rounded">
                            <option value="">Select</option>
                            <option value="dehiwala">Dehiwala</option>
                            {/* Other options */}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="dateTime" className="block mb-2 font-bold">
                            Date/Time
                        </label>
                        <input type="datetime-local" id="dateTime" className="w-full p-2 border rounded" />
                    </div>

                    {/* Anything Else? */}
                    <div className="col-span-2">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}




export default Booking;
