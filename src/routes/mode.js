import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const mode = await req.context.models.Mode.findAll({
    limit: 1,
    where: {},
    order: [['createdAt', 'DESC']]
  })
  return res.send(mode[0]);
});

router.post('/create', async (req, res) => {
  const mode = await req.context.models.Mode.create({
    value: req.body.value,
  });

  return res.send(mode);
});

export default router;
