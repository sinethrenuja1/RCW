import express from 'express';
import {getBillDetails,getTodayBookingsCount,getTodayEarnings} from '../controllers/dashboardController.js'; 

const router = express.Router();

router.get('/getBillDetails', getBillDetails);
router.get('/getTodayBookingsCount', getTodayBookingsCount);
router.get('/getTodayEarnings', getTodayEarnings);

export default router;