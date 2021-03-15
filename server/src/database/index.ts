import { config, info, error } from '../config';
import mongoose from 'mongoose';

const NAMESPACE = 'Server';

export const connectToDb = async () => {
  await mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
      info(NAMESPACE, 'Connected to mongoDB!');
    })
    .catch((err) => {
      error(NAMESPACE, err.message, error);
    });
};
