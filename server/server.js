import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.json({ message: 'Server is ready...!' });
});

app.use('/api/users', userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
