import expressConfig from './config/expressConfig.js';
import { PORT } from './config/envVariables.js';
import connectDB from './config/dbConfig.js';

(async function bootstrap() {
  expressConfig.configureExpress();

  const app = expressConfig.getApp();

  await connectDB();

  app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
  });
})();
