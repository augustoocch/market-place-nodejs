import express from 'express';
import { homePage, aboutUs, testimonies, travel } from '../controller/controller.js';
//Router creates an express instance defined
//in the main index
const router = express.Router();

router.get('/home', homePage);

router.get('/us', aboutUs);

router.get('/testimonies', testimonies);

router.get('/travel', travel);

export default router;