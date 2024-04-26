import express from 'express';
import { addStock,showStock,lowStock} from '../controllers/stockController.js'; // Adjust the path as needed

const router = express.Router();

router.post('/stock', addStock);
router.get('/showstock',showStock);
router.get('/lowStock',lowStock)


export default router;