import express from 'express';
import {getJobCards,getJobCardDetails} from '../controllers/updatejobcardController.js';

const router = express.Router();
router.get('/getJobCards',getJobCards);
router.get('/getJobCardDetails/:jobcard_id',getJobCardDetails);



export default router;