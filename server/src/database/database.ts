import config from '../config/config';
import logging from '../config/logging';

import mongoose from 'mongoose';

const NAMESPACE = 'Server';

const connectToDb = () => {
  mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
      logging.info(NAMESPACE, 'Connected to mongoDB!');
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);
    });
};

export default { connectToDb};
