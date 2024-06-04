import express from 'express';
import { addWorker,getNextWorkerIdController,worker_table,getWorkerById,updateWorkerDetails,resignWorker,deleteWorker } from '../controllers/workerController.js'; 

const router = express.Router();

router.post('/addWorker', addWorker);
router.get('/next-worker-id', getNextWorkerIdController);
router.get ('/getWorkers',worker_table);
router.get('/getWorkerById/:worker_id', getWorkerById);
router.put('/updateWorker/:worker_id',updateWorkerDetails);
router.delete('/deleteWorker/:worker_id',deleteWorker);
router.put('/resignWorker/:worker_id',resignWorker);

export default router;