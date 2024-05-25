import express from 'express';
import {addServiceJob,getNextServiceJobIdController,getAllServices,deleteService,getServiceById,updateService} from '../controllers/servicejobsController.js';

const router = express.Router();

router.post('/addServiceJob', addServiceJob);
router.get('/next-servicejob-id', getNextServiceJobIdController);
router.get('/getAllServices',getAllServices);
router.delete('/deleteService/:service_id',deleteService);
router.get('/getServiceById/:service_id', getServiceById);
router.put('/updateService/:service_id', updateService);


export default router;