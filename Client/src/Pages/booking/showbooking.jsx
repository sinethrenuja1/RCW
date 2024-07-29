import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
import { MdEdit } from 'react-icons/md';
import ShopHeader from "../../Components/shopheader";
import EditBookingModal from './editbookingmodal';
import PropTypes from 'prop-types';

function Row(props) {
    const { row, onStatusChange, onEdit } = props;
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
                <TableCell>
                    {row.b_date}
                    <IconButton aria-label="edit date" size="small" onClick={() => onEdit(row, 'date')}>
                        <MdEdit />
                    </IconButton>
                </TableCell>
                <TableCell>
                    {row.b_time}
                    <IconButton aria-label="edit time" size="small" onClick={() => onEdit(row, 'time')}>
                        <MdEdit />
                    </IconButton>
                </TableCell>
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
    onEdit: PropTypes.func.isRequired,
};

export default function BookingDetails() {
    const [bookingDetails, setBookingDetails] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentBooking, setCurrentBooking] = useState(null);

    const navigate = useNavigate();

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

    const updateBookingDateTime = async (bookingId, newDate, newTime) => {
        try {
            await axios.post(`http://localhost:8800/api/booking/updateBookingDateTime`, {
                b_id: bookingId,
                b_date: newDate,
                b_time: newTime,
            });
            fetchBookingDetails(); // Refresh the booking details after updating
            setEditModalOpen(false); // Close the modal
        } catch (error) {
            console.error('An error occurred while trying to update the booking date/time:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while trying to update the booking date/time',
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

    const handleShowPreviousBookings = () => {
        navigate("/showprevBookings");
    };

    const handleEdit = (booking, field) => {
        setCurrentBooking(booking);
        setEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setEditModalOpen(false);
        setCurrentBooking(null);
    };

    return (
        <div>
            
            <ShopHeader  pageName="Booking" />
            <div className="container bg-gray-100  mx-auto px-4 py-4">
                <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
                <label  htmlFor="datePicker">Select a date:</label>
                <input className="bg-blue-50 mb-5" type="date" id="datePicker" name="datePicker" value={selectedDate} onChange={handleDateChange} />
                <button
                    onClick={handleShowPreviousBookings}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Show Previous Bookings
                </button>
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
                                <Row key={booking.b_id} row={booking} onStatusChange={updateBookingStatus} onEdit={handleEdit} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {currentBooking && (
                <EditBookingModal
                    open={editModalOpen}
                    onClose={handleCloseModal}
                    booking={currentBooking}
                    onSave={updateBookingDateTime}
                />
            )}
        </div>
    );
}
