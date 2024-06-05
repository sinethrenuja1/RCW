// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
// import ShopHeader from "../../Components/shopheader";
// import Swal from "sweetalert2";
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// function Row(props) {
//     const { row, onStatusChange } = props;
//     const [open, setOpen] = useState(false);

//     const handleStatusChange = (event) => {
//         const newStatus = event.target.value;
//         onStatusChange(row.b_id, newStatus);
//     };

//     return (
//         <React.Fragment>
//             <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//                 <TableCell>
//                     <IconButton
//                         aria-label="expand row"
//                         size="small"
//                         onClick={() => setOpen(!open)}
//                     >
//                         {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                     </IconButton>
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                     {row.b_id}
//                 </TableCell>
//                 <TableCell>{row.bcon_num}</TableCell>
//                 <TableCell>{row.bveh_num}</TableCell>
//                 <TableCell>{row.b_date}</TableCell>
//                 <TableCell>{row.b_time}</TableCell>
//                 <TableCell>{row.vehicle_type}</TableCell>
//                 <TableCell>
//                     <select value={row.bstatus} onChange={handleStatusChange}>
//                         <option value="Scheduled">Scheduled</option>
//                         <option value="Completed">Completed</option>
//                         <option value="Cancelled">Cancelled</option>
//                     </select>
//                 </TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
//                     <Collapse in={open} timeout="auto" unmountOnExit>
//                         <Box sx={{ margin: 1 }}>
//                             <Typography variant="h6" gutterBottom component="div">
//                                 {row.anything_else ? `Note: ${row.anything_else}` : "No additional notes"}
//                             </Typography>
//                             <Typography variant="h6" gutterBottom component="div">
//                                 Services
//                             </Typography>
//                             <Table size="small" aria-label="services">
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Service ID</TableCell>
//                                         <TableCell>Service Name</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {(row.services || []).map((service, index) => (
//                                         <TableRow key={index}>
//                                             <TableCell component="th" scope="row">
//                                                 {service.slist_id}
//                                             </TableCell>
//                                             <TableCell>{service.servicelist_name}</TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </Box>
//                     </Collapse>
//                 </TableCell>
//             </TableRow>
//         </React.Fragment>
//     );
// }

// Row.propTypes = {
//     row: PropTypes.shape({
//         b_id: PropTypes.number.isRequired,
//         bcon_num: PropTypes.string.isRequired,
//         bveh_num: PropTypes.string.isRequired,
//         b_date: PropTypes.string.isRequired,
//         b_time: PropTypes.string.isRequired,
//         vehicle_type: PropTypes.string.isRequired,
//         bstatus: PropTypes.string.isRequired,
//         anything_else: PropTypes.string,
//         services: PropTypes.arrayOf(
//             PropTypes.shape({
//                 slist_id: PropTypes.number.isRequired,
//                 servicelist_name: PropTypes.string.isRequired,
//             })
//         ),
//     }).isRequired,
//     onStatusChange: PropTypes.func.isRequired,
// };

// export default function BookingDetails() {
//     const [bookingDetails, setBookingDetails] = useState([]);
//     const [selectedDate, setSelectedDate] = useState("");

//     const fetchBookingDetails = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/booking/getBookingDetails');
//             setBookingDetails(response.data);
//         } catch (error) {
//             console.error('An error occurred while trying to fetch the booking details:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'An error occurred while trying to fetch the booking details',
//             });
//         }
//     };

//     const updateBookingStatus = async (bookingId, newStatus) => {
//         try {
//             await axios.post(`http://localhost:8800/api/booking/updateBookingStatus`, {
//                 b_id: bookingId,
//                 bstatus: newStatus,
//             });
//             fetchBookingDetails(); // Refresh the booking details after updating
//         } catch (error) {
//             console.error('An error occurred while trying to update the booking status:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'An error occurred while trying to update the booking status',
//             });
//         }
//     };

//     useEffect(() => {
//         fetchBookingDetails();
//     }, []);

//     const filterBookings = () => {
//         if (selectedDate === "") {
//             return bookingDetails; // Return all bookings if no date is selected
//         } else {
//             return bookingDetails.filter(booking => booking.b_date === selectedDate);
//         }
//     };

//     const handleDateChange = (event) => {
//         setSelectedDate(event.target.value);
//     };

//     return (
//         <div>
//             <ShopHeader pageName="Booking" />
//             <div className="container mx-auto px-4 py-4">
//                 <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
//                 <label htmlFor="datePicker">Select a date:</label>
//                 <input type="date" id="datePicker" name="datePicker" value={selectedDate} onChange={handleDateChange} />
//                 <TableContainer component={Paper}>
//                     <Table aria-label="collapsible table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell />
//                                 <TableCell>Booking ID</TableCell>
//                                 <TableCell>Contact Number</TableCell>
//                                 <TableCell>Vehicle Number</TableCell>
//                                 <TableCell>Date</TableCell>
//                                 <TableCell>Time</TableCell>
//                                 <TableCell>Vehicle Type</TableCell>
//                                 <TableCell>Status</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {filterBookings().map((booking) => (
//                                 <Row key={booking.b_id} row={booking} onStatusChange={updateBookingStatus} />
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ShopHeader from "../../Components/shopheader";
import Swal from "sweetalert2";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
    const { row, onStatusChange } = props;
    const [open, setOpen] = useState(false);

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        onStatusChange(row.b_id, newStatus);
    };

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.b_id}
                </TableCell>
                <TableCell>{row.bcon_num}</TableCell>
                <TableCell>{row.bveh_num}</TableCell>
                <TableCell>{row.b_date}</TableCell>
                <TableCell>{row.b_time}</TableCell>
                <TableCell>{row.vehicle_type}</TableCell>
                <TableCell>
                    <select value={row.bstatus} onChange={handleStatusChange}>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                {row.anything_else ? `Note: ${row.anything_else}` : "No additional notes"}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                Services
                            </Typography>
                            <Table size="small" aria-label="services">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Service ID</TableCell>
                                        <TableCell>Service Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(row.services || []).map((service, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {service.slist_id}
                                            </TableCell>
                                            <TableCell>{service.servicelist_name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        b_id: PropTypes.number.isRequired,
        bcon_num: PropTypes.string.isRequired,
        bveh_num: PropTypes.string.isRequired,
        b_date: PropTypes.string.isRequired,
        b_time: PropTypes.string.isRequired,
        vehicle_type: PropTypes.string.isRequired,
        bstatus: PropTypes.string.isRequired,
        anything_else: PropTypes.string,
        services: PropTypes.arrayOf(
            PropTypes.shape({
                slist_id: PropTypes.number.isRequired,
                servicelist_name: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
    onStatusChange: PropTypes.func.isRequired,
};

export default function BookingDetails() {
    const [bookingDetails, setBookingDetails] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    const fetchBookingDetails = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/booking/getBookingDetails');
            setBookingDetails(response.data);
        } catch (error) {
            console.error('An error occurred while trying to fetch the booking details:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to fetch the booking details',
            });
        }
    };

    const updateBookingStatus = async (bookingId, newStatus) => {
        try {
            await axios.post(`http://localhost:8800/api/booking/updateBookingStatus`, {
                b_id: bookingId,
                bstatus: newStatus,
            });
            fetchBookingDetails(); // Refresh the booking details after updating
        } catch (error) {
            console.error('An error occurred while trying to update the booking status:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to update the booking status',
            });
        }
    };

    useEffect(() => {
        fetchBookingDetails();
    }, []);

    const filterBookings = () => {
        let filteredBookings = bookingDetails;
        if (selectedDate !== "") {
            filteredBookings = filteredBookings.filter(booking => booking.b_date === selectedDate);
        }
        // Sort the filtered bookings by date in ascending order
        filteredBookings.sort((a, b) => new Date(a.b_date) - new Date(b.b_date));
        return filteredBookings;
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div>
            <ShopHeader pageName="Booking" />
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
                <label htmlFor="datePicker">Select a date:</label>
                <input type="date" id="datePicker" name="datePicker" value={selectedDate} onChange={handleDateChange} />
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Booking ID</TableCell>
                                <TableCell>Contact Number</TableCell>
                                <TableCell>Vehicle Number</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Vehicle Type</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterBookings().map((booking) => (
                                <Row key={booking.b_id} row={booking} onStatusChange={updateBookingStatus} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
