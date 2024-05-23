import express from 'express';
import {addServiceJob,getNextServiceJobIdController,getAllServices} from '../controllers/servicejobsController.js';

const router = express.Router();

router.post('/addServiceJob', addServiceJob);
router.get('/next-servicejob-id', getNextServiceJobIdController);
router.get('/getAllServices',getAllServices);



export default router;