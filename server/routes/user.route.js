import express from 'express';
import { getUserProfileAndRepos } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile/:username', (req, res) =>
  res.json({ message: 'User Profile and Repos' })
);

export default router;
