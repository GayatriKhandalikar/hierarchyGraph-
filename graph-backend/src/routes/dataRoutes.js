// API route
import express from 'express';
import { getData } from '../controllers/dataController.js';

const router = express.Router();

// Route to get data
router.get('/data', getData);

export default router;
