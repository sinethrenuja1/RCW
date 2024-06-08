import express from 'express';
import { addWorker,getNextWorkerIdController,worker_table,getWorkerById,updateWorkerDetails,resignWorker,deleteWorker,resignworker_table,user_table,getUserById,updateUserDetails } from '../controllers/workerController.js'; 

const router = express.Router();

router.post('/addWorker', addWorker);
router.get('/next-worker-id', getNextWorkerIdController);
router.get ('/getWorkers',worker_table);
router.get('/getWorkerById/:worker_id', getWorkerById);
router.put('/updateWorker/:worker_id',updateWorkerDetails);
router.delete('/deleteWorker/:worker_id',deleteWorker);
router.put('/resignWorker/:worker_id',resignWorker);
router.get('/resignworker_table',resignworker_table);
router.get('/user_table',user_table);   
router.get('/getUserById/:user_id', getUserById);
router.put('/updateUserDetails/:user_id',updateUserDetails);


export default router;