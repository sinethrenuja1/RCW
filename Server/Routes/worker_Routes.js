import express from 'express';
import { addWorker,getNextWorkerIdController,worker_table,getWorkerById,updateWorkerDetails } from '../controllers/workerController.js'; 

const router = express.Router();

router.post('/addWorker', addWorker);
router.get('/next-worker-id', getNextWorkerIdController);
router.get ('/getWorkers',worker_table);
router.get('/getWorkerById/:worker_id', getWorkerById);
router.put('/updateWorker/:worker_id',updateWorkerDetails)

export default router;