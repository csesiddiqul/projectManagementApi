import express from 'express';
import {index} from '../controller/publicController.js'
const router = express.Router();

router.get('/', index);

// More routes can be defined here

export default router;