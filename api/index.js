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
app.use('/api/auth', authRoute);

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');

    // Start the server after successful MongoDB connection
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
