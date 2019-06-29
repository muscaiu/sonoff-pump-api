import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import models, { sequelize } from './models';
import routes from './routes';

import { startTime, stopTime } from './cron/statusCron';
// import tempCron from './cron/tempCron';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    // me: await models.User.findByLogin('rwieruch'),
  };
  next();
});

app.use('/api/mode', routes.mode);
app.use('/api/users', routes.user);
app.use('/api/status', routes.status);
// app.use('/api/temperature', routes.temperature);
// app.use('/api/session', routes.session);
startTime.start();
stopTime.start();
// tempCron.start()


sequelize.sync().then(async () => {
  console.log('+++ DB connected')

  app.listen(process.env.PORT, () =>
    console.log(`+++ API running on http://localhost:${process.env.PORT}`)
  );
});
