import express from 'express';
import {registerCustomer,registerVehicle,searchCustomer,checkVehicle,loadDetails} from '../controllers/jobcardController.js'; 

const router = express.Router();

router.post('/registerCustomer', registerCustomer);
router.post('/registerVehicle', registerVehicle);
router.get('/searchCustomer/:contact_number', searchCustomer);
router.get('/checkVehicle/:veh_num', checkVehicle);
router.get('/loadDetails/:veh_num', loadDetails);

export default router;
