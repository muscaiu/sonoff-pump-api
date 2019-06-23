import { Router } from 'express';
import pompaSonoff, { turnOn, turnOff } from '../sonoffs/pompaSonoff';
import { pompadb } from '../models';

const router = Router();

router.get('/', async (req, res) => {
  // const status = await req.context.models.Status.findOne().sort({ createdAt: -1 });
  // pompaSonoff().then(async data => {
  //   const { temperature } = data;
  //   const fullStatus = { status, temperature }
  //   return res.send(fullStatus);
  // })
  // return res.send(status);

  const q = {
    selector: {
      type: { "$eq": "status" }
    },
    fields: ["value", "createdAt"],
    // limit: 50
  };

  pompadb.find(q).then((statuses) => {
    const status = statuses.docs[statuses.docs.length - 1];

    pompaSonoff().then(async data => {
      const { temperature } = data;
      const fullStatus = { status, temperature }
      return res.send(fullStatus);
    })
  });
});

router.get('/list', async (req, res) => {
  // const list = await req.context.models.Status.find();
  const q = {
    selector: {
      type: { "$eq": "status" }
    },
    fields: ["value", "createdAt"],
    limit: 100
  };

  pompadb.find(q).then((statuses) => {
    return res.send(statuses.docs);
  });
});

router.post('/create', async (req, res) => {
  // const status = await req.context.models.Status.create({
  //   value: req.body.value,
  //   // user: req.context.me.id
  // })

  // return res.send(status);
  const status = await pompadb.insert({
    value: req.body.value,
    createdAt: new Date(),
    type: 'status'
  })

  if (req.body.value === true) {
    turnOn()
  }
  if (req.body.value === false) {
    turnOff();
  }

  if (status.ok) {
    res.send({
      value: req.body.value,
      createdAt: new Date()
    });
  }
});

export default router;
