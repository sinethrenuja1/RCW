import express from 'express';
import {registerCustomer,registerVehicle,searchCustomer,checkVehicle,loadDetails,getNextJobCardIdController,getSupervisors,saveJobCard,fetchServiceSuggestions,addUsedService,getRequestjobs,getServices,searchParts,addUsedPart,getPartsForJobCard} from '../controllers/jobcardController.js'; 

const router = express.Router();

router.post('/registerCustomer', registerCustomer);
router.post('/registerVehicle', registerVehicle);
router.get('/searchCustomer/:contact_number', searchCustomer);
router.get('/checkVehicle/:veh_num', checkVehicle);
router.get('/loadDetails/:veh_num', loadDetails);
router.get('/next-job-id', getNextJobCardIdController);
router.get('/loadSupervisors', getSupervisors);
router.post('/save_jobcard', saveJobCard);
router.get('/fetchServiceSuggestions', fetchServiceSuggestions);
router.post('/addUsedService', addUsedService);
router.get('/getRequestjobs/:jobcard_id', getRequestjobs);
router.get('/getServices',getServices);
router.get('/searchParts', searchParts);
router.post('/addUsedPart', addUsedPart);
router.get('/getPartsForJobCard/:jobcard_id', getPartsForJobCard);


export default router;
