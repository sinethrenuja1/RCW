import express from 'express';
import {registerCustomer,registerVehicle} from '../controllers/jobcardController.js'; 

const router = express.Router();

router.post('/registerCustomer', registerCustomer);
router.post('/registerVehicle', registerVehicle);

export default router;
