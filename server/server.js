import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import exploreRouter from './routes/explore.route.js';

const app = express();
dotenv.config();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Server is ready...!' });
});

app.use('/api/users', userRouter);
app.use('/api/explore', exploreRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
