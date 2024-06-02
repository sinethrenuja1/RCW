import express from 'express';
import {addUser,loginUser,encryptPasswords} from '../controllers/userController.js';

const router = express.Router();

router.post('/addUser', addUser);
router.post('/login', loginUser);
router.post('/encryptPasswords', encryptPasswords);



export default router;