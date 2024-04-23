import express from 'express';
import { addStock } from '../controllers/stockController.js'; // Adjust the path as needed

const router = express.Router();

router.post('/stock', addStock);

export default router;