import express from 'express';
import path from 'path';
import cors from 'cors';
import { info, config } from './config';
import { connectToDb } from './database';
import { loggingMiddleware } from './middlewares';
import router from './routes';

const NAMESPACE = 'Server';
const app = express();

// Connect DB
connectToDb();

// preinit.ts

// /server/config.ts i init.ts -> funcje do configuracji i do właczania / preinit.ts

//const readytogoserver = configureServer()

/* logging the request */
app.use(express.static(path.join('../client/build')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// middleware
app.use(loggingMiddleware);

// routes
app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

app.listen(config.server.port, () => info(NAMESPACE, `Server is running on ${config.server.hostname}:${config.server.port}`));
