import express from 'express';
import {getNotStartedJobCards,startJob,getJobCardDetails,updateJobCardStatus,updateServiceWorker,getAvailableWorkers,updatePartWorker} from '../controllers/supervisorController.js'; // Adjust the path as needed

const router = express.Router();

router.get('/not_started_jobcards', getNotStartedJobCards);
router.put('/start_job/:jobcard_id', startJob);
router.get('/jobcard_details/:jobcard_id', getJobCardDetails);
router.put('/updateJobCardStatus/:jobcard_id', updateJobCardStatus);
router.put('/updateServiceWorker', updateServiceWorker);
router.get('/available_workers', getAvailableWorkers);
router.put('/updatePartWorker', updatePartWorker);

export default router;
