import mongoose from 'mongoose';
import { MONGO_STRING } from './envVariables.js';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_STRING);
    console.info('MongoDB connected successfully');
  } catch ({ message }) {
    console.error('MongoDB connection error:', message);
    process.exit(1);
  }
};

export default connectDB;
