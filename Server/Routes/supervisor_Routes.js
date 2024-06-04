import express from 'express';
import {getNotStartedJobCards,startJob} from '../controllers/supervisorController.js'; // Adjust the path as needed

const router = express.Router();

router.get('/not_started_jobcards', getNotStartedJobCards);
router.put('/start_job/:jobcard_id', startJob);


export default router;
