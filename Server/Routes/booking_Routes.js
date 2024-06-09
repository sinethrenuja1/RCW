import express from 'express';
import {addService,getServices,deleteService,getHolidays,addHoliday,deleteHoliday,addBooking,addBookingServices,updateBookingStatus,getBookingDetails,getCancelledOrCompletedBookingDetails} from '../controllers/bookingController.js';

const router = express.Router();

router.post('/addServicetoweb', addService);
router.get('/getServices', getServices);
router.delete('/deleteService/:id', deleteService);
router.get('/getHolidays', getHolidays);
router.post('/addHoliday', addHoliday);
router.post('/deleteHoliday/:date', deleteHoliday);
router.post('/addBooking', addBooking);
router.post('/addBooking_services', addBookingServices);
router.get('/getBookingDetails', getBookingDetails);
router.post('/updateBookingStatus', updateBookingStatus);
router.get('/getCancelledOrCompletedBookingDetails', getCancelledOrCompletedBookingDetails);
export default router;