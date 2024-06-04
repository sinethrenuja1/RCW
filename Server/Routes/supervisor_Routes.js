import express from 'express';
import {getNotStartedJobCards} from '../controllers/supervisorController.js'; // Adjust the path as needed

const router = express.Router();

router.get('/not_started_jobcards', getNotStartedJobCards);


export default router;
