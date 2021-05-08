import express, { Response, Request } from 'express';
import path from 'path';
import cors from 'cors';
import router from '../routes';
import { info, config } from '../config';
import { connectToDb } from '../database';
import { loggingMiddleware } from '../middlewares';

const NAMESPACE = 'Server';

class Server {
  static config(app: any) {
    connectToDb();
    app.use(express.static(path.join('../client/build')));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
  }
  static addRouting(app: any) {
    app.use('/api', router);
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname + '../../../client/build/index.html'));
    });
  }

  static addMiddleware(app: any) {
    app.use(loggingMiddleware);
  }
  static startServer(app: any) {
    app.listen(config.server.port, () => info(NAMESPACE, `Server is running on ${config.server.hostname}:${config.server.port}`));
  }
}

export default Server;
