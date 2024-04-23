import express from 'express';
import { addStock,showStock } from '../controllers/stockController.js'; // Adjust the path as needed

const router = express.Router();

router.post('/stock', addStock);
router.get('/showstock',showStock)

export default router;