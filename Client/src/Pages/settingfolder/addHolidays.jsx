// import { useState, useEffect } from "react";
// import ShopHeader from "../../Components/shopheader";   
// import axios from "axios";
// import Swal from "sweetalert2";

// function HolidayManagement() {
//     const [holidayDate, setHolidayDate] = useState("");
//     const [holidays, setHolidays] = useState([]);

//     // Fetch holidays from the backend
//     const fetchHolidays = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/booking/getHolidays');
//             setHolidays(response.data);
//         } catch (error) {
//             console.error('An error occurred while trying to fetch the holidays:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'An error occurred while trying to fetch the holidays',
//             });
//         }
//     };

//     // Add a new holiday
//     const addHoliday = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8800/api/booking/addHoliday', { date: holidayDate });
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success',
//                 text: 'Holiday added successfully',
//             });
//             setHolidayDate(""); // Clear the input
//             fetchHolidays(); // Refresh the list of holidays
//         } catch (error) {
//             console.error('An error occurred while trying to add the holiday:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'An error occurred while trying to add the holiday',
//             });
//         }
//     };

//     // Fetch holidays when the component mounts
//     useEffect(() => {
//         fetchHolidays();
//     }, []);



//     // Filter holidays to show only those from today onwards
//     const filteredHolidays = holidays.filter(holiday => new Date(holiday) >= new Date().setHours(0, 0, 0, 0));

//     return (
//         <div>
//             <div><ShopHeader pageName="Add Holidays"/></div>

//             <div className="container mx-auto p-20 w-3/4 mt-8">
//                 <h2 className="text-2xl font-bold mb-4">Manage Holidays</h2>

//                 {/* Form to add a new holiday */}
//                 <form onSubmit={addHoliday} className="mb-8">
//                     <div className="mb-4">
//                         <label htmlFor="holidayDate" className="block mb-2 font-bold">Add Holiday</label>
//                         <input
//                             type="date"
//                             id="holidayDate"
//                             className="w-full p-2 border rounded"
//                             value={holidayDate}
//                             onChange={(e) => setHolidayDate(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                         Add Holiday
//                     </button>
//                 </form>

//                 {/* Table to display holidays */}
//                 <table className="w-full table-auto border-collapse">
//                     <thead>
//                         <tr>
//                             <th className="border px-4 py-2">Date</th>
//                             <th className="border px-4 py-2">Action</th>
                        
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredHolidays.map((holiday, index) => (
//                             <tr key={index}>
//                                 <td className="border px-4 py-2">{holiday}</td>
//                                 <td className="border px-4 py-2">
//                                     <button
                                        
//                                         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default HolidayManagement;

import { useState, useEffect } from "react";
import ShopHeader from "../../Components/shopheader";   
import axios from "axios";
import Swal from "sweetalert2";

function HolidayManagement() {
    const [holidayDate, setHolidayDate] = useState("");
    const [holidays, setHolidays] = useState([]);

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

    // Add a new holiday
    const addHoliday = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8800/api/booking/addHoliday', { date: holidayDate });
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Holiday added successfully',
            });
            setHolidayDate(""); // Clear the input
            fetchHolidays(); // Refresh the list of holidays
        } catch (error) {
            console.error('An error occurred while trying to add the holiday:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to add the holiday',
            });
        }
    };

    // Delete a holiday
    const deleteHoliday = async (date) => {
        try {
            await axios.post(`http://localhost:8800/api/booking/deleteHoliday/${date}`);
            Swal.fire({
                icon: 'success',
                title: 'Deleted',
                text: 'Holiday deleted successfully',
            });
            fetchHolidays(); // Refresh the list of holidays
        } catch (error) {
            console.error('An error occurred while trying to delete the holiday:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to delete the holiday',
            });
        }
    };

    // Handle delete button click
    const handleDelete = (date) => {
        console.log('Deleting holiday:', date);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteHoliday(date);
            }
        });
    };

    // Fetch holidays when the component mounts
    useEffect(() => {
        fetchHolidays();
    }, []);

    // Filter holidays to show only those from today onwards
    const filteredHolidays = holidays.filter(holiday => new Date(holiday) >= new Date().setHours(0, 0, 0, 0));

    return (
        <div>
            <div><ShopHeader pageName="Add Holidays"/></div>

            <div className="container bg-blue-50 mx-auto p-20 w-3/4 mt-8">
                <h2 className="text-2xl font-bold mb-4">Manage Holidays</h2>

                {/* Form to add a new holiday */}
                <form onSubmit={addHoliday} className="mb-8">
                    <div className="mb-4">
                        <label htmlFor="holidayDate" className="block mb-2 font-bold">Add Holiday</label>
                        <input
                            type="date"
                            id="holidayDate"
                            className="w-full p-2 border rounded"
                            value={holidayDate}
                            onChange={(e) => setHolidayDate(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Holiday
                    </button>
                </form>

                {/* Table to display holidays */}
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredHolidays.map((holiday, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{holiday}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(holiday)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HolidayManagement;
