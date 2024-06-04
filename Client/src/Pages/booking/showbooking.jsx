// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import ShopHeader from "../../Components/shopheader";
// // import Swal from "sweetalert2";

// // function BookingDetails() {
// //     const [bookingDetails, setBookingDetails] = useState([]);

// //     // Fetch booking details from the backend
// //     const fetchBookingDetails = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:8800/api/booking/getBookingDetails');
// //             setBookingDetails(response.data);
// //         } catch (error) {
// //             console.error('An error occurred while trying to fetch the booking details:', error);
// //             Swal.fire({
// //                 icon: 'error',
// //                 title: 'Oops...',
// //                 text: 'An error occurred while trying to fetch the booking details',
// //             });
// //         }
// //     };

// //     // Fetch data when the component mounts
// //     useEffect(() => {
// //         fetchBookingDetails();
// //     }, []);

// //     return (
// //         <div>
// //             <ShopHeader pageName="Booking"/>
// //             <div className="container mx-auto p-20 w-3/4 mt-8">
// //                 <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
// //                 <table className="min-w-full bg-white">
// //                     <thead>
// //                         <tr>
                            
// //                             <th className="py-2 px-4 border-b">Contact Number</th>
// //                             <th className="py-2 px-4 border-b">Vehicle Number</th>
// //                             <th className="py-2 px-4 border-b">Date</th>
// //                             <th className="py-2 px-4 border-b">Time</th>
// //                             <th className="py-2 px-4 border-b">Vehicle Type</th>
// //                             <th className="py-2 px-4 border-b">Anything Else</th>
// //                             <th className="py-2 px-4 border-b">Status</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {bookingDetails.map((booking) => (
// //                             <tr key={booking.b_id}>
                                
// //                                 <td className="py-2 px-4 border-b">{booking.bcon_num}</td>
// //                                 <td className="py-2 px-4 border-b">{booking.bveh_num}</td>
// //                                 <td className="py-2 px-4 border-b">{booking.b_date}</td>
// //                                 <td className="py-2 px-4 border-b">{booking.b_time}</td>
// //                                 <td className="py-2 px-4 border-b">{booking.vehicle_type}</td>
// //                                 <td className="py-2 px-4 border-b">{booking.anything_else}</td>
// //                                 <td className="py-2 px-4 border-b">{booking.bstatus}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // }

// // export default BookingDetails;

// // import React, { useState, useEffect } from "react";
// // import PropTypes from "prop-types";
// // import axios from "axios";
// // import ShopHeader from "../../Components/shopheader";
// // import Swal from "sweetalert2";
// // import Box from '@mui/material/Box';
// // import Collapse from '@mui/material/Collapse';
// // import IconButton from '@mui/material/IconButton';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Typography from '@mui/material/Typography';
// // import Paper from '@mui/material/Paper';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// // function Row(props) {
// //   const { row } = props;
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <React.Fragment>
// //       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
// //         <TableCell>
// //           <IconButton
// //             aria-label="expand row"
// //             size="small"
// //             onClick={() => setOpen(!open)}
// //           >
// //             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
// //           </IconButton>
// //         </TableCell>
// //         <TableCell component="th" scope="row">
// //           {row.b_id}
// //         </TableCell>
// //         <TableCell>{row.bcon_num}</TableCell>
// //         <TableCell>{row.bveh_num}</TableCell>
// //         <TableCell>{row.b_date}</TableCell>
// //         <TableCell>{row.b_time}</TableCell>
// //         <TableCell>{row.vehicle_type}</TableCell>
// //         <TableCell>{row.anything_else}</TableCell>
// //         <TableCell>{row.bstatus}</TableCell>
// //       </TableRow>
// //       <TableRow>
// //         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
// //           <Collapse in={open} timeout="auto" unmountOnExit>
// //             <Box sx={{ margin: 1 }}>
// //               <Typography variant="h6" gutterBottom component="div">
// //                 History
// //               </Typography>
// //               <Table size="small" aria-label="purchases">
// //                 <TableHead>
// //                   <TableRow>
// //                     <TableCell>Date</TableCell>
// //                     <TableCell>Customer</TableCell>
// //                     <TableCell align="right">Amount</TableCell>
// //                     <TableCell align="right">Total price ($)</TableCell>
// //                   </TableRow>
// //                 </TableHead>
// //                 <TableBody>
// //                   {row.history?.map((historyRow) => (
// //                     <TableRow key={historyRow.date}>
// //                       <TableCell component="th" scope="row">
// //                         {historyRow.date}
// //                       </TableCell>
// //                       <TableCell>{historyRow.customerId}</TableCell>
// //                       <TableCell align="right">{historyRow.amount}</TableCell>
// //                       <TableCell align="right">
// //                         {Math.round(historyRow.amount * historyRow.totalPrice * 100) / 100}
// //                       </TableCell>
// //                     </TableRow>
// //                   ))}
// //                 </TableBody>
// //               </Table>
// //             </Box>
// //           </Collapse>
// //         </TableCell>
// //       </TableRow>
// //     </React.Fragment>
// //   );
// // }

// // Row.propTypes = {
// //   row: PropTypes.shape({
// //     b_id: PropTypes.number.isRequired,
// //     bcon_num: PropTypes.string.isRequired,
// //     bveh_num: PropTypes.string.isRequired,
// //     b_date: PropTypes.string.isRequired,
// //     b_time: PropTypes.string.isRequired,
// //     vehicle_type: PropTypes.string.isRequired,
// //     anything_else: PropTypes.string.isRequired,
// //     bstatus: PropTypes.string.isRequired,
// //     history: PropTypes.arrayOf(
// //       PropTypes.shape({
// //         amount: PropTypes.number.isRequired,
// //         customerId: PropTypes.string.isRequired,
// //         date: PropTypes.string.isRequired,
// //         totalPrice: PropTypes.number.isRequired,
// //       })
// //     ),
// //   }).isRequired,
// // };

// // export default function BookingDetails() {
// //   const [bookingDetails, setBookingDetails] = useState([]);

// //   const fetchBookingDetails = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:8800/api/booking/getBookingDetails');
// //       setBookingDetails(response.data);
// //     } catch (error) {
// //       console.error('An error occurred while trying to fetch the booking details:', error);
// //       Swal.fire({
// //         icon: 'error',
// //         title: 'Oops...',
// //         text: 'An error occurred while trying to fetch the booking details',
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBookingDetails();
// //   }, []);

// //   return (
// //     <div>
// //       <ShopHeader pageName="Booking"/>
// //       <div className="container mx-auto p-20 w-3/4 mt-8">
// //         <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
// //         <TableContainer component={Paper}>
// //           <Table aria-label="collapsible table">
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell />
// //                 <TableCell>Booking ID</TableCell>
// //                 <TableCell>Contact Number</TableCell>
// //                 <TableCell>Vehicle Number</TableCell>
// //                 <TableCell>Date</TableCell>
// //                 <TableCell>Time</TableCell>
// //                 <TableCell>Vehicle Type</TableCell>
// //                 <TableCell>Anything Else</TableCell>
// //                 <TableCell>Status</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {bookingDetails.map((booking) => (
// //                 <Row key={booking.b_id} row={booking} />
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </div>
// //     </div>
// //   );
// // }


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
//   const { row } = props;
//   const [open, setOpen] = useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.b_id}
//         </TableCell>
//         <TableCell>{row.bcon_num}</TableCell>
//         <TableCell>{row.bveh_num}</TableCell>
//         <TableCell>{row.b_date}</TableCell>
//         <TableCell>{row.b_time}</TableCell>
//         <TableCell>{row.vehicle_type}</TableCell>
//         <TableCell>{row.anything_else}</TableCell>
//         <TableCell>{row.bstatus}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history?.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * historyRow.totalPrice * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     b_id: PropTypes.number.isRequired,
//     bcon_num: PropTypes.string.isRequired,
//     bveh_num: PropTypes.string.isRequired,
//     b_date: PropTypes.string.isRequired,
//     b_time: PropTypes.string.isRequired,
//     vehicle_type: PropTypes.string.isRequired,
//     anything_else: PropTypes.string.isRequired,
//     bstatus: PropTypes.string.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//         totalPrice: PropTypes.number.isRequired,
//       })
//     ),
//   }).isRequired,
// };

// export default function BookingDetails() {
//   const [bookingDetails, setBookingDetails] = useState([]);

//   const fetchBookingDetails = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/booking/getBookingDetails');
//       setBookingDetails(response.data);
//     } catch (error) {
//       console.error('An error occurred while trying to fetch the booking details:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while trying to fetch the booking details',
//       });
//     }
//   };

//   useEffect(() => {
//     fetchBookingDetails();
//   }, []);

//   return (
//     <div>
//       <ShopHeader pageName="Booking"/>
//       <div className="container mx-auto px-4 py-4">
//         <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
//         <TableContainer component={Paper}>
//           <Table aria-label="collapsible table">
//             <TableHead>
//               <TableRow>
//                 <TableCell />
//                 <TableCell>Booking ID</TableCell>
//                 <TableCell>Contact Number</TableCell>
//                 <TableCell>Vehicle Number</TableCell>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Time</TableCell>
//                 <TableCell>Vehicle Type</TableCell>
                
//                 <TableCell>Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {bookingDetails.map((booking) => (
//                 <Row key={booking.b_id} row={booking} />
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
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
  const { row } = props;
  const [open, setOpen] = useState(false);

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
        <TableCell>{row.bstatus}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
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
    services: PropTypes.arrayOf(
      PropTypes.shape({
        slist_id: PropTypes.number.isRequired,
        servicelist_name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default function BookingDetails() {
  const [bookingDetails, setBookingDetails] = useState([]);

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

  useEffect(() => {
    fetchBookingDetails();
  }, []);

  return (
    <div>
      <ShopHeader pageName="Booking"/>
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
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
              {bookingDetails.map((booking) => (
                <Row key={booking.b_id} row={booking} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
