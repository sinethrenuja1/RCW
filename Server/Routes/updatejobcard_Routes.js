import express from 'express';
import {getJobCards,getJobCardDetails,getFinishedJobCards,updateStatus,saveBillDetails} from '../controllers/updatejobcardController.js';

const router = express.Router();
router.get('/getJobCards',getJobCards);
router.get('/getJobCardDetails/:jobcard_id',getJobCardDetails);
router.get('/getFinishjobcard',getFinishedJobCards);
router.put('/updateStatus', updateStatus);
router.post('/saveBillDetails',saveBillDetails)
// router.get('/getJobCardStatus', getJobCardStatus);
// router.post('/updateJobCardStatusonlystart', updateJobCardStatusonlystart);

export default router;