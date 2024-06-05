import express from 'express';
import {getNotStartedJobCards,startJob,getJobCardDetails,updateJobCardStatus,updateServiceWorker,getAvailableWorkers,updatePartWorker,StartedJobCards} from '../controllers/supervisorController.js';
const router = express.Router();

router.get('/not_started_jobcards', getNotStartedJobCards);
router.put('/start_job/:jobcard_id', startJob);
router.get('/jobcard_details/:jobcard_id', getJobCardDetails);
router.put('/updateJobCardStatus', updateJobCardStatus);
router.put('/updateServiceWorker', updateServiceWorker);
router.get('/available_workers', getAvailableWorkers);
router.put('/updatePartWorker', updatePartWorker);
router.get('/started_jobcards', StartedJobCards);



export default router;
