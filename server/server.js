import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import exploreRouter from './routes/explore.route.js';
import authRouter from './routes/auth.route.js';
import connectMongoDB from './db/connectMongoDB.js';

const app = express();
dotenv.config();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Server is ready...!' });
});

app.use('/api/users', userRouter);
app.use('/api/explore', exploreRouter);
app.use('/api/auth', authRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
  connectMongoDB();
});
