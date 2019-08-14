import { Router } from 'express';
import pompaSonoff, { turnOn, turnOff } from '../sonoffs/pompaSonoff';

const router = Router();

router.get('/', async (req, res) => {
  // pompaSonoff().then(async data => {
  const statuses = await req.context.models.Status.findAll({
    limit: 1,
    where: {},
    order: [['createdAt', 'DESC']]
  })
  const temperatures = await req.context.models.Temperature.findAll({
    limit: 1,
    where: {},
    order: [['createdAt', 'DESC']]
  })
  const fullStatus = { status: statuses[0], temperature: temperatures[0].value }
  return res.send(fullStatus);
  // })
});

router.get('/list', async (req, res) => {
  const statuses = await req.context.models.Status.findAll({
    limit: 100,
    where: {},
    order: [['createdAt', 'ASC']]
  })
  return res.send(statuses);
});

router.post('/create', async (req, res) => {
  console.log(req.body.value)
  const status = await req.context.models.Status.create({
    value: req.body.value,
  });

  status.value ? turnOn() : turnOff()

  return res.send(status);
});

export default router;
