import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const mode = await req.context.models.Mode.findOne().sort({ createdAt: -1 });
  return res.send(mode);
});

router.get('/:modeId', async (req, res) => {
  const mode = await req.context.models.Mode.findById(
    req.params.modeId,
  )
  return res.send(mode);
});

router.post('/create', async (req, res) => {
  const mode = await req.context.models.Mode.create({
    value: req.body.value,
    // user: req.context.me.id
  })

  return res.send(mode);
});

export default router;
