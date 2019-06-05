import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const status = await req.context.models.Status.findOne().sort({ createdAt: -1 });
  return res.send(status);
});

router.post('/create', async (req, res) => {
  const status = await req.context.models.Status.create({
    value: req.body.value,
    // user: req.context.me.id
  })
  console.log(status)

  return res.send(status);
});

export default router;
