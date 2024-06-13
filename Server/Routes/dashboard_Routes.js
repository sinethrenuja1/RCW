import express from 'express';
import {getBillDetails,getSupervisorJobCounts,getTodayBookingsCount,getTodayEarnings,getOngoingjob_count} from '../controllers/dashboardController.js'; 

const router = express.Router();

router.get('/getBillDetails', getBillDetails);
router.get('/getTodayBookingsCount', getTodayBookingsCount);
router.get('/getTodayEarnings', getTodayEarnings);
router.get('/getOngoingjob_count', getOngoingjob_count);
router.get('/getSupervisorJobCounts', getSupervisorJobCounts);

export default router;