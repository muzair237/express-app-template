import ExpressConfig from './config/express.config.js';
import { PORT } from './config/envVariables.config.js';
import connectDB from './config/db.config.js';

(async function bootstrap() {
  const expressConfig = ExpressConfig.getInstance();

  await expressConfig.configureExpress();

  const app = expressConfig.getApp();

  await connectDB();

  app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
  });
})();
