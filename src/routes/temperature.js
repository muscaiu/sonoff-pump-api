import { Router } from 'express';
import pompaSonoff from '../sonoffs/pompaSonoff';

const router = Router();

router.get('/list', async (req, res) => {
  const temperatures = await req.context.models.Temperature.findAll({
    limit: 100,
    where: {},
    order: [['createdAt', 'ASC']]
  })
  return res.send(temperatures);
});

router.post('/create', async (req, res) => {
  const status = await req.context.models.Temperature.create({
    value: req.body.value,
  });

  return res.send(status);
});

export default router;



// import { Router } from 'express';
// import pompaSonoff from '../sonoffs/pompaSonoff';
// // const logger = require('./logger');

// const router = Router();

// router.get('/', async (req, res) => {
//   pompaSonoff()
//     .then(data => res.send(data))
// });

// router.get('/list', async (req, res) => {
//   // const list = await req.context.models.Status.find();
//   // console.log('list:', list)
//   // return res.send(list);

//   pompadb.find({
//     selector: {
//       type: { "$eq": "temperature" }
//     },
//     fields: ["temperature", "createdAt"],
//     limit: 100
//   }).then((temperatures) => {
//     return res.send(temperatures.docs);
//   });
// });

// export default router;
