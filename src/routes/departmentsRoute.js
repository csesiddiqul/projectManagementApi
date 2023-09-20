import express from 'express';
import {index,show, create,update ,destroy} from '../controller/departmentController.js'
const router = express.Router();

router.get('/', index);
router.get('/get/:id',show);
router.post('/create', create);
router.put('/update/:id',update);
router.delete('/delete/:id',destroy);

// More routes can be defined here

export default router;