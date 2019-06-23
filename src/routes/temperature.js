import { Router } from 'express';
import pompaSonoff from '../sonoffs/pompaSonoff';
// const logger = require('./logger');

const router = Router();

router.get('/', async (req, res) => {
  pompaSonoff()
    .then(data => res.send(data))
});

router.get('/list', async (req, res) => {
  // const list = await req.context.models.Status.find();
  // console.log('list:', list)
  // return res.send(list);

  pompadb.find({
    selector: {
      type: { "$eq": "temperature" }
    },
    fields: ["temperature", "createdAt"],
    limit: 100
  }).then((temperatures) => {
    return res.send(temperatures.docs);
  });
});

export default router;
