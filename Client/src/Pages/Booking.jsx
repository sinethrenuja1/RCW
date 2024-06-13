// import { useState, useEffect } from "react";
// import Nav_bar from "../Components/home_nav";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Home from "../images/home_back3.png";

// const Booking = () => {
//   const [bookingDetails, setBookingDetails] = useState({
//     bcon_num: "",
//     bveh_num: "",
//     b_date: "",
//     b_time: "",
//     vehicle_type: "",
//     anything_else: "",
//     bstatus: ""
//   });
//   const [services, setServices] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [holidays, setHolidays] = useState([]);

//   useEffect(() => {
//     fetchServices();
//     fetchHolidays();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/booking/getServices');
//       setServices(response.data);
//     } catch (error) {
//       console.error('An error occurred while trying to fetch the services:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to fetch the services',
//       });
//     }
//   };

//   const fetchHolidays = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/booking/getHolidays');
//       setHolidays(response.data);
//     } catch (error) {
//       console.error('An error occurred while trying to fetch the holidays:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to fetch the holidays',
//       });
//     }
//   };

//   const generateTimeSlots = () => {
//     const slots = [];
//     let start = new Date();
//     start.setHours(8, 0, 0, 0);

//     while (start.getHours() < 15) {
//       slots.push(`${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}`);
//       start = new Date(start.getTime() + 45 * 60 * 1000);
//     }

//     return slots;
//   };

//   const handleDateChange = (e) => {
//     const selected = e.target.value;
//     if (holidays.includes(selected)) {
//       Swal.fire({
//         title: 'Unavailable',
//         text: 'We are closed on the selected date. Please pick a different date.',
//         confirmButtonColor: '#3085d6',
//       });
//       setSelectedDate("");
//     } else {
//       setSelectedDate(selected);
//     }
//   };

//   const handleServiceChange = (slist_id) => {
//     setSelectedServices(prevServices =>
//       prevServices.includes(slist_id)
//         ? prevServices.filter(id => id !== slist_id)
//         : [...prevServices, slist_id]
//     );
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const bookingData = {
//         ...bookingDetails,
//         b_date: selectedDate,
//         b_time: selectedTimeSlot
//       };

//       const response = await axios.post('http://localhost:8800/api/booking/addBooking', bookingData);
//       const { b_id } = response.data;

//       if (selectedServices.length > 0) {
//         await axios.post('http://localhost:8800/api/booking/addBooking_services', {
//           b_id,
//           services: selectedServices
//         });

//       }

//       Swal.fire({
//         icon: 'success',
//         title: 'Booking Confirmed',
//         html: `<p>Your booking has been successfully completed!</p>
//                <p><strong>Date:</strong> ${selectedDate}</p>
//                <p><strong>Time Slot:</strong> ${selectedTimeSlot}</p>
//                <p>If you need to cancel your booking, please contact us.</p>`,
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'OK'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.reload();
//         }
//       })


//       ;
//     } catch (error) {
//       console.error('An error occurred while trying to add the booking:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to add the booking',
//       });
//     }

//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex justify-center items-center"
//       style={{ backgroundImage: `url(${Home})` }}
//     >
//       <div className="bg-black bg-opacity-50 mt-4 py-10  w-4/5 pl-5 pr-5 mb-5">
//         <Nav_bar />
//         <div className="max-w-10xl mx-auto p-6">
//           <form className="space-y-6" onSubmit={handleBookingSubmit}>
//             <h2 className="text-3xl mt-5 font-bold text-center text-gray-100">
//               Booking Form
//             </h2>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Contact Information
//             </h3>
//             <div className="grid grid-cols-1  w-1/2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Contact Number<span className="text-red-500"> *</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="bcon_num"
//                   value={bookingDetails.bcon_num}
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, bcon_num: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 />
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Vehicle Information
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Vehicle Type<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   name="vehicle_type"
//                   value={bookingDetails.vehicle_type}
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, vehicle_type: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="car">Car</option>
//                   <option value="van">Van</option>
//                   <option value="jeep">Jeep</option>
//                   <option value="cab">Cab</option>
//                   <option value="suv">SUV</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Vehicle Number<span className="text-red-500"> *</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="bveh_num"
//                   value={bookingDetails.bveh_num}
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, bveh_num: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 />
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Select Services
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {services.map(service => (
//                 <div key={service.slist_id} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={`service-${service.slist_id}`}
//                     className="mr-2"
//                     onChange={() => handleServiceChange(service.slist_id)}
//                   />
//                   <label htmlFor={`service-${service.slist_id}`} className="text-gray-200">{service.servicelist_name}</label>
//                 </div>
//               ))}
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Booking Date and Time
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Date<span className="text-red-500"> *</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="b_date"
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Time Slot<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   name="b_time"
//                   value={selectedTimeSlot}
//                   onChange={(e) => setSelectedTimeSlot(e.target.value)}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 >
//                   <option value="">Select</option>
//                   {generateTimeSlots().map((slot, index) => (
//                     <option key={index} value={slot}>{slot}</option>
//                   ))}
//                                 </select>
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Additional Information
//             </h3>
//             <div className="grid grid-cols-1 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Anything Else?
//                 </label>
//                 <textarea
//                   name="anything_else"
//                   value={bookingDetails.anything_else}
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, anything_else: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Submit Booking
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;

// import { useState, useEffect } from "react";
// import Nav_bar from "../Components/home_nav";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Home from "../images/home_back3.png";

// const Booking = () => {
//   const [bookingDetails, setBookingDetails] = useState({
//     bcon_num: "",
//     bveh_num: "",
//     b_date: "",
//     b_time: "",
//     vehicle_type: "",
//     anything_else: "",
//     bstatus: ""
//   });
//   const [services, setServices] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [holidays, setHolidays] = useState([]);

//   const today = new Date();
//   const maxDate = new Date();
//   maxDate.setDate(today.getDate() + 14); // Add 14 days to today

//   // Convert dates to YYYY-MM-DD format
//   const minDateStr = today.toISOString().split('T')[0];
//   const maxDateStr = maxDate.toISOString().split('T')[0];

//   useEffect(() => {
//     fetchServices();
//     fetchHolidays();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/booking/getServices');
//       setServices(response.data);
//     } catch (error) {
//       console.error('An error occurred while trying to fetch the services:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to fetch the services',
//       });
//     }
//   };



//   const fetchHolidays = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/booking/getHolidays');
//       setHolidays(response.data);
//     } catch (error) {
//       console.error('An error occurred while trying to fetch the holidays:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to fetch the holidays',
//       });
//     }
//   };

//   const generateTimeSlots = () => {
//     const slots = [];
//     let start = new Date();
//     start.setHours(8, 0, 0, 0);

//     while (start.getHours() < 15) {
//       slots.push(`${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}`);
//       start = new Date(start.getTime() + 45 * 60 * 1000);
//     }

//     return slots;
//   };

//   const handleDateChange = (e) => {
//     const selected = e.target.value;
//     if (holidays.includes(selected)) {
//       Swal.fire({
//         title: 'Unavailable',
//         text: 'We are closed on the selected date. Please pick a different date.',
//         confirmButtonColor: '#3085d6',
//       });
//       setSelectedDate("");
//     } else {
//       setSelectedDate(selected);
//     }
//   };

//   const handleServiceChange = (slist_id) => {
//     setSelectedServices(prevServices =>
//       prevServices.includes(slist_id)
//         ? prevServices.filter(id => id !== slist_id)
//         : [...prevServices, slist_id]
//     );
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const bookingData = {
//         ...bookingDetails,
//         b_date: selectedDate,
//         b_time: selectedTimeSlot
//       };

//       const response = await axios.post('http://localhost:8800/api/booking/addBooking', bookingData);
//       const { b_id } = response.data;

//       if (selectedServices.length > 0) {
//         await axios.post('http://localhost:8800/api/booking/addBooking_services', {
//           b_id,
//           services: selectedServices
//         });

//       }

//       Swal.fire({
//         icon: 'success',
//         title: 'Booking Confirmed',
//         html: `<p>Your booking has been successfully completed!</p>
//                <p><strong>Date:</strong> ${selectedDate}</p>
//                <p><strong>Time Slot:</strong> ${selectedTimeSlot}</p>
//                <p>If you need to cancel your booking, please contact us.</p>`,
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'OK'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.reload();
//         }
//       })


//         ;
//     } catch (error) {
//       console.error('An error occurred while trying to add the booking:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to add the booking',
//       });
//     }

//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex justify-center items-center"
//       style={{ backgroundImage: `url(${Home})` }}
//     >
//       <div className="bg-black bg-opacity-50 mt-4 py-10  w-4/5 pl-5 pr-5 mb-5">
//         <Nav_bar />
//         <div className="max-w-10xl mx-auto p-6">
//           <form className="space-y-6" onSubmit={handleBookingSubmit}>
//             <h2 className="text-3xl mt-5 font-bold text-center text-gray-100">
//               Booking Form
//             </h2>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Contact Information
//             </h3>
//             <div className="grid grid-cols-1 w-1/2 gap-6">
//               <div className="grid grid-cols-1 w-1/2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-200">
//                     Contact Number<span className="text-red-500"> *</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="bcon_num"
//                     pattern="^0[1-9]\d{8}$"
//                     title="Contact number must contain exactly 10 digits."
//                     value={bookingDetails.bcon_num}
//                     onChange={(e) => setBookingDetails({ ...bookingDetails, bcon_num: e.target.value })}
//                     onInput={(e) => {
//                       const newValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
//                       setBookingDetails({ ...bookingDetails, bcon_num: newValue });
//                     }}
//                     onKeyDown={(e) => {
//                       // Allow: backspace, delete, tab, escape, enter, arrow keys
//                       if (
//                         [8, 46, 9, 27, 13, 37, 38, 39, 40].includes(e.keyCode) ||
//                         // Allow: Ctrl/cmd+A, Ctrl/cmd+C, Ctrl/cmd+V, Ctrl/cmd+X
//                         (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
//                         (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
//                         (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
//                         (e.keyCode === 88 && (e.ctrlKey || e.metaKey))
//                       ) {
//                         return; // let it happen, don't do anything
//                       }
//                       // Ensure that it is a number and stop the keypress
//                       if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//                         e.preventDefault();
//                       }
//                     }}
//                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Vehicle Information
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Vehicle Type<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   name="vehicle_type"
//                   value={bookingDetails.vehicle_type}
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, vehicle_type: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 >
//                   <option value="" disabled>Select</option>
//                   <option value="car">Car</option>
//                   <option value="van">Van</option>
//                   <option value="jeep">Jeep</option>
//                   <option value="cab">Cab</option>
//                   <option value="suv">SUV</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Vehicle Number<span className="text-red-500"> *</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="bveh_num"
//                   value={bookingDetails.bveh_num}
//                   pattern="^([A-Za-z]{2,3}|[0-9]{2,3})-[0-9]{4}$"
//                   title="Enter valid Vehicle Number."
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, bveh_num: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 />
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Select Services
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {services.map(service => (
//                 <div key={service.slist_id} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={`service-${service.slist_id}`}
//                     className="mr-2"
//                     onChange={() => handleServiceChange(service.slist_id)}
//                   />
//                   <label htmlFor={`service-${service.slist_id}`} className="text-gray-200">{service.servicelist_name}</label>
//                 </div>
//               ))}
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Booking Date and Time
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Date<span className="text-red-500"> *</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="b_date"
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                   min={minDateStr} // Set minimum date
//                   max={maxDateStr} // Set maximum date
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Time Slot<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   name="b_time"
//                   value={selectedTimeSlot}
//                   onChange={(e) => setSelectedTimeSlot(e.target.value)}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 >
//                   <option value="" disabled>Select</option>
//                   {generateTimeSlots().map((slot, index) => (
//                     <option key={index} value={slot}>{slot}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Additional Information
//             </h3>
//             <div className="grid grid-cols-1 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Anything Else?
//                 </label>
//                 <textarea
//                   name="anything_else"
//                   value={bookingDetails.anything_else}
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, anything_else: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Submit Booking
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;



// import { useState, useEffect } from "react";
// import Nav_bar from "../Components/home_nav";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Home from "../images/home_back3.png";

// const Booking = () => {
//   const [bookingDetails, setBookingDetails] = useState({
//     bcon_num: "",
//     bveh_num: "",
//     b_date: "",
//     b_time: "",
//     vehicle_type: "",
//     anything_else: "",
//     bstatus: ""
//   });
//   const [services, setServices] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [holidays, setHolidays] = useState([]);

//   const today = new Date();
//   const maxDate = new Date();
//   maxDate.setDate(today.getDate() + 14); // Add 14 days to today

//   // Convert dates to YYYY-MM-DD format
//   const minDateStr = today.toISOString().split('T')[0];
//   const maxDateStr = maxDate.toISOString().split('T')[0];

//   useEffect(() => {
//     fetchServices();
//     fetchHolidays();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/booking/getServices');
//       setServices(response.data);
//     } catch (error) {
//       console.error('An error occurred while trying to fetch the services:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to fetch the services',
//       });
//     }
//   };

//   const fetchHolidays = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/booking/getHolidays');
//       setHolidays(response.data);
//     } catch (error) {
//       console.error('An error occurred while trying to fetch the holidays:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to fetch the holidays',
//       });
//     }
//   };

//   const generateTimeSlots = () => {
//     const slots = [];
//     let start = new Date();
//     start.setHours(8, 0, 0, 0);

//     while (start.getHours() < 15) {
//       slots.push(`${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}`);
//       start = new Date(start.getTime() + 45 * 60 * 1000);
//     }

//     return slots;
//   };

//   const handleDateChange = (e) => {
//     const selected = e.target.value;
//     if (holidays.includes(selected)) {
//       Swal.fire({
//         title: 'Unavailable',
//         text: 'We are closed on the selected date. Please pick a different date.',
//         confirmButtonColor: '#3085d6',
//       });
//       setSelectedDate("");
//     } else {
//       setSelectedDate(selected);
//     }
//   };

//   const handleServiceChange = (slist_id) => {
//     setSelectedServices(prevServices =>
//       prevServices.includes(slist_id)
//         ? prevServices.filter(id => id !== slist_id)
//         : [...prevServices, slist_id]
//     );
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const bookingData = {
//         ...bookingDetails,
//         b_date: selectedDate,
//         b_time: selectedTimeSlot
//       };

//       const response = await axios.post('http://localhost:8800/api/booking/addBooking', bookingData);
//       const { b_id } = response.data;

//       if (selectedServices.length > 0) {
//         await axios.post('http://localhost:8800/api/booking/addBooking_services', {
//           b_id,
//           services: selectedServices
//         });
//       }

//       Swal.fire({
//         icon: 'success',
//         title: 'Booking Confirmed',
//         html: `<p>Your booking has been successfully completed!</p>
//                <p><strong>Date:</strong> ${selectedDate}</p>
//                <p><strong>Time Slot:</strong> ${selectedTimeSlot}</p>
//                <p>If you need to cancel your booking, please contact us.</p>`,
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'OK'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.reload();
//         }
//       });
//     } catch (error) {
//       console.error('An error occurred while trying to add the booking:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to add the booking',
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${Home})` }}>
//       <div className="bg-black bg-opacity-50 mt-4 py-10  w-4/5 pl-5 pr-5 mb-5">
//         <Nav_bar />
//         <div className="max-w-10xl mx-auto p-6">
//           <form className="space-y-6" onSubmit={handleBookingSubmit}>
//             <h2 className="text-3xl mt-5 font-bold text-center text-gray-100">
//               Booking Form
//             </h2>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Contact Information
//             </h3>
//             <div className="grid grid-cols-1 w-1/2 gap-6">
//               <div className="grid grid-cols-1 w-1/2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-200">
//                     Contact Number<span className="text-red-500"> *</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="bcon_num"
//                     pattern="^0[1-9]\d{8}$"
//                     title="Contact number must contain exactly 10 digits."
//                     value={bookingDetails.bcon_num}
//                     onChange={(e) => setBookingDetails({ ...bookingDetails, bcon_num: e.target.value })}
//                     onInput={(e) => {
//                       const newValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
//                       setBookingDetails({ ...bookingDetails, bcon_num: newValue });
//                     }}
//                     onKeyDown={(e) => {
//                       // Allow: backspace, delete, tab, escape, enter, arrow keys
//                       if (
//                         [8, 46, 9, 27, 13, 37, 38, 39, 40].includes(e.keyCode) ||
//                         // Allow: Ctrl/cmd+A, Ctrl/cmd+C, Ctrl/cmd+V, Ctrl/cmd+X
//                         (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
//                         (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
//                         (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
//                         (e.keyCode === 88 && (e.ctrlKey || e.metaKey))
//                       ) {
//                         return; // let it happen, don't do anything
//                       }
//                       // Ensure that it is a number and stop the keypress
//                       if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//                         e.preventDefault();
//                       }
//                     }}
//                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Vehicle Information
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Vehicle Type<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   name="vehicle_type"
//                   value={bookingDetails.vehicle_type}
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, vehicle_type: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 >
//                   <option value="" disabled>Select</option>
//                   <option value="car">Car</option>
//                   <option value="van">Van</option>
//                   <option value="jeep">Jeep</option>
//                   <option value="cab">Cab</option>
//                   <option value="suv">SUV</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Vehicle Number<span className="text-red-500"> *</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="bveh_num"
//                   value={bookingDetails.bveh_num}
//                   pattern="^([A-Za-z]{2,3}|[0-9]{2,3})-[0-9]{4}$"
//                   title="Enter valid Vehicle Number."
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, bveh_num: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow
// -sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 />
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Select Services
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {services.map(service => (
//                 <div key={service.slist_id} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={`service-${service.slist_id}`}
//                     className="mr-2"
//                     onChange={() => handleServiceChange(service.slist_id)}
//                   />
//                   <label htmlFor={`service-${service.slist_id}`} className="text-gray-200">{service.servicelist_name}</label>
//                 </div>
//               ))}
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Booking Date and Time
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Date<span className="text-red-500"> *</span>
//                 </label>
//                 <input
//                   type="date"
//                   name="b_date"
//                   value={selectedDate}
//                   onChange={handleDateChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                   min={minDateStr} // Set minimum date
//                   max={maxDateStr} // Set maximum date
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Time Slot<span className="text-red-500"> *</span>
//                 </label>
//                 <select
//                   name="b_time"
//                   value={selectedTimeSlot}
//                   onChange={(e) => setSelectedTimeSlot(e.target.value)}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   required
//                 >
//                   <option value="" disabled>Select</option>
//                   {generateTimeSlots().map((slot, index) => (
//                     <option key={index} value={slot}>{slot}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">
//               Additional Information
//             </h3>
//             <div className="grid grid-cols-1 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Anything Else?
//                 </label>
//                 <textarea
//                   name="anything_else"
//                   value={bookingDetails.anything_else}
//                   onChange={(e) => setBookingDetails({ ...bookingDetails, anything_else: e.target.value })}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Submit Booking
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;

import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Nav_bar from "../Components/home_nav";
import Home from "../images/home_back3.png";

const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    bcon_num: "",
    bveh_num: "",
    b_date: "",
    b_time: "",
    vehicle_type: "",
    anything_else: "",
    bstatus: ""
  });
  const [services, setServices] = useState([]);


  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [holidays, setHolidays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 14); // Add 14 days to today

  // Convert dates to YYYY-MM-DD format
  const minDateStr = today.toISOString().split('T')[0];
  const maxDateStr = maxDate.toISOString().split('T')[0];

  useEffect(() => {
    fetchServices();
    fetchHolidays();
  }, []);

  // const fetchServices = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8800/api/booking/getServices');
  //     setServices(response.data);
  //   } catch (error) {
  //     console.error('An error occurred while trying to fetch the services:', error);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'An error occurred while trying to fetch the services',
  //     });
  //   }
  // };
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

  const fetchTimeSlots = async (date) => {
    try {
      const response = await axios.get(`http://localhost:8800/api/booking/getTimeSlots?date=${date}`);
      setTimeSlots(response.data);
    } catch (error) {
      console.error('An error occurred while trying to fetch the time slots:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while trying to fetch the time slots',
      });
    }
  };

  const handleDateChange = async (e) => {
    const selected = e.target.value;
    if (holidays.includes(selected)) {
      Swal.fire({
        title: 'Unavailable',
        text: 'We are closed on the selected date. Please pick a different date.',
        confirmButtonColor: '#3085d6',
      });
      setSelectedDate("");
    } else {
      setSelectedDate(selected);
      await fetchTimeSlots(selected); // Fetch available time slots for the selected date
    }
  };
  const handleServiceChange = (slist_id) => {
        setSelectedServices(prevServices =>
          prevServices.includes(slist_id)
            ? prevServices.filter(id => id !== slist_id)
            : [...prevServices, slist_id]
        );
      };
  // const handleServiceChange = (slist_id) => {
  //   setSelectedServices(prevServices =>
  //     prevServices.includes(slist_id)
  //       ? prevServices.filter(id => id !== slist_id)
  //       : [...prevServices, slist_id]
  //   );
  // };

  // const handleBookingSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const bookingData = {
  //       ...bookingDetails,
  //       b_date: selectedDate,
  //       b_time: selectedTimeSlot
  //     };

  //     const response = await axios.post('http://localhost:8800/api/booking/addBooking', bookingData);
  //     const { b_id } = response.data;

  //     if (selectedServices.length > 0) {
  //       await axios.post('http://localhost:8800/api/booking/addBooking_services', {
  //         b_id,
  //         services: selectedServices
  //       });
  //     }

  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Booking Confirmed',
  //       html: `<p>Your booking has been successfully completed!</p>
  //              <p><strong>Date:</strong> ${selectedDate}</p>
  //              <p><strong>Time Slot:</strong> ${selectedTimeSlot}</p>
  //              <p>If you need to cancel your booking, please contact us.</p>`,
  //       confirmButtonColor: '#3085d6',
  //       confirmButtonText: 'OK'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         window.location.reload();
  //       }
  //     });
  //   } catch (error) {
  //     console.error('An error occurred while trying to add the booking:', error);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'An error occurred while trying to add the booking',
  //     });
  //   }
  // };
  const handleBookingSubmit = async (e) => {
        e.preventDefault();
        try {
          const bookingData = {
            ...bookingDetails,
            b_date: selectedDate,
            b_time: selectedTimeSlot
          };
    
          const response = await axios.post('http://localhost:8800/api/booking/addBooking', bookingData);
          const { b_id } = response.data;
    
          if (selectedServices.length > 0) {
            await axios.post('http://localhost:8800/api/booking/addBooking_services', {
              b_id,
              services: selectedServices
            });
    
          }
    
          Swal.fire({
            icon: 'success',
            title: 'Booking Confirmed',
            html: `<p>Your booking has been successfully completed!</p>
                   <p><strong>Date:</strong> ${selectedDate}</p>
                   <p><strong>Time Slot:</strong> ${selectedTimeSlot}</p>
                   <p>If you need to cancel your booking, please contact us.</p>`,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
    
    
          ;
        } catch (error) {
          console.error('An error occurred while trying to add the booking:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occurred while trying to add the booking',
          });
        }
    
      };
  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${Home})` }}>
      <div className="bg-black bg-opacity-50 mt-4 py-10  w-4/5 pl-5 pr-5 mb-5">
        <Nav_bar />
        <div className="max-w-10xl mx-auto p-6">
          <form className="space-y-6" onSubmit={handleBookingSubmit}>
            <h2 className="text-3xl mt-5 font-bold text-center text-gray-100">
              Booking Form
            </h2>

            <h3 className="text-lg font-semibold text-gray-200">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 w-1/2 gap-6">
              <div className="grid grid-cols-1 w-1/2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200">
                    Contact Number<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="tel"
                    name="bcon_num"
                    pattern="^0[1-9]\d{8}$"
                    title="Contact number must contain exactly 10 digits."
                    value={bookingDetails.bcon_num}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, bcon_num: e.target.value })}
                    onInput={(e) => {
                      const newValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                      setBookingDetails({ ...bookingDetails, bcon_num: newValue });
                    }}
                    onKeyDown={(e) => {
                      // Allow: backspace, delete, tab, escape, enter, arrow keys
                      if (
                       
                          [8, 46, 9, 27, 13, 37, 38, 39, 40].includes(e.keyCode) ||
                          // Allow: Ctrl/cmd+A, Ctrl/cmd+C, Ctrl/cmd+V, Ctrl/cmd+X
                          (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                          (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                          (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                          (e.keyCode === 88 && (e.ctrlKey || e.metaKey))
                        ) {
                          return; // let it happen, don't do anything
                        }
                        // Ensure that it is a number and stop the keypress
                        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                          e.preventDefault();
                        }
                      }}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
              </div>
  
              <h3 className="text-lg font-semibold text-gray-200">
                Vehicle Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200">
                    Vehicle Type<span className="text-red-500"> *</span>
                  </label>
                  <select
                    name="vehicle_type"
                    value={bookingDetails.vehicle_type}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, vehicle_type: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select a vehicle type</option>
                    <option value="jeep">Jeep</option>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                    <option value="suv">SUV</option>
                    <option value="cab">Cab</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200">
                    Vehicle Number<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    name="bveh_num"
                    value={bookingDetails.bveh_num}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, bveh_num: e.target.value })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
  
              <h3 className="text-lg font-semibold text-gray-200">
                Booking Date & Time
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200">
                    Date<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="date"
                    name="b_date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    min={minDateStr}
                    max={maxDateStr}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200">
                    Time Slot<span className="text-red-500"> *</span>
                  </label>
                  
                
<select
    name="b_time"
    value={selectedTimeSlot}
    onChange={(e) => setSelectedTimeSlot(e.target.value)}
    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    required
>
    <option value="" disabled>Select a time slot</option>
    {timeSlots.map((slot, index) => (
        <option key={index} value={slot.slot} disabled={!slot.available}>
            {slot.slot} {slot.available ? '(Available)' : '(Booked)'}
        </option>
    ))}
</select>

                </div>
              </div>
  
              <h3 className="text-lg font-semibold text-gray-200">
                Additional Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Anything Else
                </label>
                <textarea
                  name="anything_else"
                  value={bookingDetails.anything_else}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, anything_else: e.target.value })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
  
              {/* <h3 className="text-lg font-semibold text-gray-200">
                Select Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service) => (
                  <div key={service.slist_id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service.slist_id}
                      name="services"
                      value={service.slist_id}
                      onChange={() => handleServiceChange(service.slist_id)}
                      checked={selectedServices.includes(service.slist_id)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor={service.slist_id} className="ml-2 text-gray-200">
                      {service.service_name} - LKR {service.service_price}
                    </label>
                  </div>
                ))}
              </div>
   */}

<h3 className="text-lg font-semibold text-gray-200">
              Select Services
           </h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {services.map(service => (
                <div key={service.slist_id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`service-${service.slist_id}`}
                    className="mr-2"
                    onChange={() => handleServiceChange(service.slist_id)}
                  />
                  <label htmlFor={`service-${service.slist_id}`} className="text-gray-200">{service.servicelist_name}</label>
                </div>
              ))}
            </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Booking;
  
