import express from 'express';
import routes from './routes';

const kill = require('kill-port');

import './database';

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
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
