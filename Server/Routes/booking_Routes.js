import express from 'express';
import {addService,getServices,deleteService,getHolidays} from '../controllers/bookingController.js';

const router = express.Router();

router.post('/addServicetoweb', addService);
router.get('/getServices', getServices);
router.delete('/deleteService/:id', deleteService);
router.get('/getHolidays', getHolidays);


export default router;