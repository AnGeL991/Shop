import http from 'http';
import express from 'express';
import path from 'path';
import logging from './config/logging';
import config from './config/config';
import mongoose from 'mongoose';

import productRoutes from './routes/product';
import userRoutes from './routes/user';

const NAMESPACE = 'Server';
const router = express();

/* Connect to Mongo */
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then((result) => {
    logging.info(NAMESPACE, 'Connected to mongoDB!');
  })
  .catch((error) => {
    logging.error(NAMESPACE, error.message, error);
  });

/* logging the request */
router.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD -[${req.method}],URL -[${req.url}], IP - [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logging.info(NAMESPACE, `METHOD -[${req.method}],URL -[${req.url}], IP - [${req.socket.remoteAddress}],STATUS -[${res.statusCode}]`);
  });
  next();
});

router.use(express.static(path.join('../client/build')));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

/* Rules of our API */
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

/*Routes */
router.use('/api', productRoutes);
router.use('/api', userRoutes);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});
/* Error handling */

router.use((req, res, next) => {
  const error = new Error('not Found');

  return res.status(404).json({
    message: error.message
  });
});
/* Create the server */
const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running on ${config.server.hostname}:${config.server.port}`));
