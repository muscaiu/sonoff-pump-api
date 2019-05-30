import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from './routes';
import models from './models';

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(process.env.PORT, () =>
  console.log(`API running on http://localhost:${process.env.PORT}`),
);
