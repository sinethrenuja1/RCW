import express from 'express';
import {registerCustomer,registerVehicle,searchCustomer,checkVehicle} from '../controllers/jobcardController.js'; 

const router = express.Router();

router.post('/registerCustomer', registerCustomer);
router.post('/registerVehicle', registerVehicle);
router.get('/searchCustomer/:contact_number', searchCustomer);
router.get('/checkVehicle/:veh_num', checkVehicle);

export default router;
