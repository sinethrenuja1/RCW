// import { useState, useEffect } from "react";
// import Nav_bar from "../Components/home_nav";
// import axios from "axios";
// import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function Booking() {
//     const [services, setServices] = useState([]);
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//     const [holidays, setHolidays] = useState([]);

//     // Fetch services from the backend
//     const fetchServices = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/booking/getServices');
//             setServices(response.data);
//         } catch (error) {
//             console.error('An error occurred while trying to fetch the services:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'An error occurred while trying to fetch the services',
//             });
//         }
//     };

//     // Fetch holidays from the backend
//     const fetchHolidays = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/booking/getHolidays');
//             setHolidays(response.data.map(date => new Date(date)));
//         } catch (error) {
//             console.error('An error occurred while trying to fetch the holidays:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'An error occurred while trying to fetch the holidays',
//             });
//         }
//     };

//     // Fetch data when the component mounts
//     useEffect(() => {
//         fetchServices();
//         fetchHolidays();
//     }, []);

//     // Generate time slots from 8:00 AM to 3:00 PM in 45-minute intervals
//     const generateTimeSlots = () => {
//         const slots = [];
//         let start = new Date();
//         start.setHours(8, 0, 0, 0); // Start time 8:00 AM

//         while (start.getHours() < 15) { // End time 3:00 PM
//             slots.push(`${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}`);
//             start = new Date(start.getTime() + 45 * 60 * 1000); // Add 45 minutes
//         }

//         return slots;
//     };

//     return (
//         <div>
//             <div><Nav_bar /> </div>

//             <div className="container mx-auto p-20 w-3/4 mt-8">
//                 <form className="grid grid-cols-2 gap-4 pt-15">
//                     <div className="col-span-2">
//                         <label htmlFor="phone" className="block mb-2 font-bold">
//                             Contact Number
//                         </label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             className="w-full p-2 border rounded"
//                         />
//                     </div>

//                     {/* Vehicle Information */}
//                     <div className="col-span-1">
//                         <label htmlFor="vehicleType" className="block mb-2 font-bold">
//                             Vehicle Type
//                         </label>
//                         <select id="vehicleType" className="w-full p-2 border rounded">
//                             <option value="">Select</option>
//                             <option value="car">Car</option>
//                             <option value="van">Van</option>
//                             <option value="truck">Truck</option>
//                             <option value="suv">SUV</option>
//                             <option value="other">Other</option>
//                             {/* Other options */}
//                         </select>
//                     </div>
//                     <div className="col-span-1">
//                         <label htmlFor="vehicleNumber" className="block mb-2 font-bold">
//                             Vehicle Number
//                         </label>
//                         <input
//                             type="text"
//                             id="vehicleNumber"
//                             className="w-full p-2 border rounded"
//                         />
//                     </div>

//                     {/* Select Services */}
//                     <div className="col-span-2">
//                         <label className="block mb-2 font-bold">Select Services</label>
//                         <div className="flex flex-wrap">
//                             {services.map(service => (
//                                 <div key={service.slist_id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//                                     <input type="checkbox" id={`service-${service.slist_id}`} className="mr-2" />
//                                     <label htmlFor={`service-${service.slist_id}`}>{service.servicelist_name}</label>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Date Picker */}
//                     <div className="col-span-1">
//                         <label htmlFor="date" className="block mb-2 font-bold">
//                             Date
//                         </label>
//                         <DatePicker
//                             selected={selectedDate}
//                             onChange={(date) => setSelectedDate(date)}
//                             excludeDates={holidays}
//                             className="w-full p-2 border rounded"
//                         />
//                     </div>

//                     {/* Time Slots */}
//                     <div className="col-span-1">
//                         <label htmlFor="timeSlot" className="block mb-2 font-bold">
//                             Time Slot
//                         </label>
//                         <select
//                             id="timeSlot"
//                             className="w-full p-2 border rounded"
//                             value={selectedTimeSlot}
//                             onChange={(e) => setSelectedTimeSlot(e.target.value)}
//                         >
//                             <option value="">Select</option>
//                             {generateTimeSlots().map((slot, index) => (
//                                 <option key={index} value={slot}>{slot}</option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Anything Else */}
//                     <div className="col-span-2">
//                         <label htmlFor="anythingElse" className="block mb-2 font-bold">
//                             Anything Else?
//                         </label>
//                         <input
//                             type="text"
//                             id="anythingElse"
//                             className="w-full h-20 p-2 border rounded"
//                         />
//                     </div>

//                     {/* Submit Button */}
//                     <div className="col-span-2">
//                         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Booking;

import { useState, useEffect } from "react";
import Nav_bar from "../Components/home_nav";
import axios from "axios";
import Swal from "sweetalert2";

function Booking() {
    const [services, setServices] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const [holidays, setHolidays] = useState([]);

    // Fetch services from the backend
    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/booking/getServices');
            setServices(response.data);
        } catch (error) {
            console.error('An error occurred while trying to fetch the services:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to fetch the services',
            });
        }
    };

    // Fetch holidays from the backend
    const fetchHolidays = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/booking/getHolidays');
            setHolidays(response.data);
        } catch (error) {
            console.error('An error occurred while trying to fetch the holidays:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to fetch the holidays',
            });
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchServices();
        fetchHolidays();
    }, []);

    // Generate time slots from 8:00 AM to 3:00 PM in 45-minute intervals
    const generateTimeSlots = () => {
        const slots = [];
        let start = new Date();
        start.setHours(8, 0, 0, 0); // Start time 8:00 AM

        while (start.getHours() < 15) { // End time 3:00 PM
            slots.push(`${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}`);
            start = new Date(start.getTime() + 45 * 60 * 1000); // Add 45 minutes
        }

        return slots;
    };

    // Handle date change and check if the selected date is a holiday
    const handleDateChange = (e) => {
        const selected = e.target.value;
        if (holidays.includes(selected)) {
            Swal.fire({
                // icon: 'error',
                title: 'Unavailable',
                text: 'The selected date is a holiday. Please choose another date.',
            });
            setSelectedDate("");
        } else {
            setSelectedDate(selected);
        }
    };

    return (
        <div>
            <div><Nav_bar /> </div>

            <div className="container mx-auto p-20 w-3/4 mt-8">
                <form className="grid grid-cols-2 gap-4 pt-15">
                    <div className="col-span-2">
                        <label htmlFor="phone" className="block mb-2 font-bold">
                            Contact Number
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
                            <option value="van">Van</option>
                            <option value="truck">Truck</option>
                            <option value="suv">SUV</option>
                            <option value="other">Other</option>
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
                    <div className="col-span-2">
                        <label className="block mb-2 font-bold">Select Services</label>
                        <div className="flex flex-wrap">
                            {services.map(service => (
                                <div key={service.slist_id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <input type="checkbox" id={`service-${service.slist_id}`} className="mr-2" />
                                    <label htmlFor={`service-${service.slist_id}`}>{service.servicelist_name}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Date Picker */}
                    <div className="col-span-1">
                        <label htmlFor="date" className="block mb-2 font-bold">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full p-2 border rounded"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>

                    {/* Time Slots */}
                    <div className="col-span-1">
                        <label htmlFor="timeSlot" className="block mb-2 font-bold">
                            Time Slot
                        </label>
                        <select
                            id="timeSlot"
                            className="w-full p-2 border rounded"
                            value={selectedTimeSlot}
                            onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        >
                            <option value="">Select</option>
                            {generateTimeSlots().map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                            ))}
                        </select>
                    </div>

                    {/* Anything Else */}
                    <div className="col-span-2">
                        <label htmlFor="anythingElse" className="block mb-2 font-bold">
                            Anything Else?
                        </label>
                        <input
                            type="text"
                            id="anythingElse"
                            className="w-full h-20 p-2 border rounded"
                        />
                    </div>

                    {/* Submit Button */}
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

