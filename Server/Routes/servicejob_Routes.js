import express from 'express';
import {addServiceJob,getNextServiceJobIdController} from '../controllers/servicejobsController.js';

const router = express.Router();

router.post('/addServiceJob', addServiceJob);
router.get('/next-servicejob-id', getNextServiceJobIdController);



export default router;