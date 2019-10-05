import express from 'express';
import routes from './routes';

const kill = require('kill-port');

import './database';
import config from './config/config';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    //kill('3333', 'tcp')
    //  .then(console.log)
    //  .catch(console.log);
    this.server.use('/files', express.static(config.path.uploads));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
