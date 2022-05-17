import express from 'express';
import { getOwners } from '../controllers/ownerController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/owners', auth, getOwners);

export default router;
