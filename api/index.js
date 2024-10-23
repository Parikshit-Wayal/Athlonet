import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
dotenv.config();

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});
app.use('/api/user', userRoutes);
//mongoDB connection made by import the dotenv.(enviroment varaible)
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB connected');
    
app.use('/api/auth',authRoute);  




















    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
