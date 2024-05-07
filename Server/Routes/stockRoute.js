import express from 'express';
import { addStock,showStock,lowStock,autoCompletePartId, getaStock, updateStock, trackStockUpdate} from '../controllers/stockController.js'; // Adjust the path as needed

const router = express.Router();

router.post('/stock', addStock);
router.put('/update-stock', updateStock)
router.get('/stock/:suggestion', getaStock);
router.get('/showstock',showStock);
router.get('/lowStock',lowStock)
router.get('/autoCompletePartId', autoCompletePartId);
router.post('/trackstock', trackStockUpdate);

export default router;