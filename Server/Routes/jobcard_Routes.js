import express from 'express';
import {registerCustomer,registerVehicle,searchCustomer} from '../controllers/jobcardController.js'; 

const router = express.Router();

router.post('/registerCustomer', registerCustomer);
router.post('/registerVehicle', registerVehicle);
router.get('/searchCustomer/:contact_number', searchCustomer);

export default router;
