import express from 'express';
import {getTotalBuying,getTotalUsedParts} from '../controllers/reportController.js';

const router = express.Router();

router.get('/total-buying', getTotalBuying);
router.get('/total-used-parts', getTotalUsedParts);

export default router;