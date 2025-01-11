import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import appRoutes from '../app.controller.js';

class ExpressConfig {
  constructor() {
    this.app = express();
  }

  configureMiddleware() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan(':date[iso] - :req[X-Real-IP] - :method - :url - :status - :response-time ms'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  configureRoutes() {
    this.app.use(appRoutes);
  }

  async configureExpress() {
    this.configureMiddleware();
    this.configureRoutes();
  }

  getApp() {
    return this.app;
  }
}

export default new ExpressConfig();
