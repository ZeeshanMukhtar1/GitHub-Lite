import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

import './passport/github.auth.js';

import userRouter from './routes/user.route.js';
import exploreRouter from './routes/explore.route.js';
import authRouter from './routes/auth.route.js';
import connectMongoDB from './db/connectMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  session({ secret: 'keyboard cat', resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

dotenv.config();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Server is ready...!' });
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/explore', exploreRouter);

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
  connectMongoDB();
});
