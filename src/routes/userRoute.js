import express from 'express';
import {userCrate,userUpate, userall} from '../controller/userController.js'

const router = express.Router();

router.get('/', userall);
router.post('/create', userCrate);
router.put('/update/:id', userUpate);

// More routes can be defined here

export default router;