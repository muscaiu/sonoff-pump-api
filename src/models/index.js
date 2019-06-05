import mongoose from 'mongoose';

import User from './user';
import Message from './message';
import Mode from './mode';
import Status from './status';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Message, Mode, Status };

export { connectDb };

export default models;
