import express from 'express';
import {
  LikeProfile,
  getLikes,
  getUserProfileAndRepos,
} from '../controllers/user.controller.js';
import { ensureAuthenticated } from '../middleware/ensureAunthicated.js';

const router = express.Router();

router.get('/profile/:username', getUserProfileAndRepos);
router.post('/like/:username', ensureAuthenticated, LikeProfile);
router.post('/likes', ensureAuthenticated, getLikes);

export default router;
