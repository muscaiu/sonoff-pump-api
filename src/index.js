import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { startTime, stopTime } from './cron/statusCron';
import tempCron from './cron/tempCron';

// import models, { connectDb } from './models';
// import { nano } from './models';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(async (req, res, next) => {
//   req.context = {
//     nano,
//     // me: await models.User.findByLogin('admin'),
//   };
//   next();
// });

app.use('/api/mode', routes.mode);
app.use('/api/users', routes.user);
app.use('/api/status', routes.status);
app.use('/api/temperature', routes.temperature);
// app.use('/api/session', routes.session);
// app.use('/api/messages', routes.message);
startTime.start();
stopTime.start();
tempCron.start()

// nano.db.get('alice').then((body) => {
//   console.log('DC doc_count', body.doc_count)
// })
app.listen(process.env.PORT, () =>
  console.log(`API running on http://localhost:${process.env.PORT}`)
);

// const createUsersWithMessages = async () => {
//   const user1 = new models.User({
//     username: 'admin',
//     password: 'orhideelor'
//   });
//   const message1 = new models.Message({
//     text: 'wtf message',
//     user: user1.id,
//   });
//   const mode1 = new models.Mode({
//     value: 'manual',
//   });
//   const status1 = new models.Status({
//     value: true,
//   });
//   await message1.save();
//   await user1.save();
//   await mode1.save();
//   await status1.save();
// };

// const eraseDatabaseOnSync = false;
// connectDb().then(async () => {
//   if (eraseDatabaseOnSync) {
//     await Promise.all([
//       models.User.deleteMany({}),
//       models.Message.deleteMany({}),
//       models.Mode.deleteMany({}),
//       models.Status.deleteMany({}),
//     ])
//       .then(() => console.log('DB refreshed'));

//     createUsersWithMessages();
//   }


// });

