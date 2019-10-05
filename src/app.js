import express from 'express';
import routes from './routes';
import path from 'path';

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
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
