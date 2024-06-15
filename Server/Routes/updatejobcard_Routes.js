import express from 'express';
import {getJobCards,getJobCardDetails,getJobCardshowDetails,getFinishedJobCards,updateStatus,saveBillDetails,updateJobCardStatus,getClosedJobCards,getFinishJobCardDetails,updateCustomerContact} from '../controllers/updatejobcardController.js';

const router = express.Router();
router.get('/getJobCards',getJobCards);
router.get('/getJobCardDetails/:jobcard_id',getJobCardDetails);
router.get('/getJobCardshowDetails/:jobcard_id',getJobCardshowDetails);
router.get('/getFinishjobcard',getFinishedJobCards);
router.put('/updateStatus', updateStatus);
router.post('/saveBillDetails',saveBillDetails);
router.put('/updateJobCardStatus', updateJobCardStatus);
router.get('/getClosedJobCards',getClosedJobCards);
router.get('/getFinishJobCardDetails/:jobcard_id',getFinishJobCardDetails);
router.put('/updateCustomerContact', updateCustomerContact);

export default router;