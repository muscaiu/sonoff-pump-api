const nano = require('nano')('http://192.168.1.10:5984');
const pompadb = nano.use('pompadb')

// nano.db.changes('pompadb').then((body) => {
//   // console.log(body);
// });

// const feed = nano.followUpdates({ since: Date.now() });
// feed.on('change', (change) => {
//   console.log("change: ", change);
// });
// feed.follow();

// nano.db.create('alice').then((body) => {
//   console.log('database alice created!');
// })

// nano.db.get('alice').then((body) => {
//   console.log(body);
// })

// nano.db.destroy('alice').then((body) => {
//   // database destroyed
// })

// nano.db.changes('alice').then((body) => {
//   console.log('changes');
// });

// const feed = nano.followUpdates({ since: "now" });
// feed.on('change', (change) => {
//   console.log("change feed: ");
// });
// feed.follow();
// process.nextTick(() => {
//   console.log('nexttick')
//   // nano.db.create('alice');
// });

// async function asyncCall() {
//   // await nano.db.destroy('alice')
//   // await nano.db.create('alice')
//   const alice = nano.use('alice')
//   const response = await alice.insert({ happy: true }, 'rabbit')
//   return response
// }
// asyncCall()

export { pompadb };


// import mongoose from 'mongoose';

// import User from './user';
// import Message from './message';
// import Mode from './mode';
// import Status from './status';

// const connectDb = () => {
//   return mongoose.connect(process.env.DATABASE_URL);
// };

// const models = { User, Message, Mode, Status };

// export { connectDb };

// export default models;