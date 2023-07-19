import express from 'express';
import { homePage, aboutUs, reviews, travel, detailTravel } from '../controller/controller.js';
import { saveReview } from '../controller/reviewControler.js';
//Router creates an express instance defined
//in the main index
const router = express.Router();

router.get('/home', homePage);

router.get('/us', aboutUs);

router.get('/reviews', reviews);

router.post('/reviews', saveReview);

router.get('/travel', travel);

router.get('/travel/:slug', detailTravel);

export default router;