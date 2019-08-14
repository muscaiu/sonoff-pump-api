import { Router } from 'express';

const router = Router();

router.get('/list', async (req, res) => {
  const temperatures = await req.context.models.Temperature.findAll({
    limit: 30,
    order: [['createdAt', 'DESC']]
  })
  return res.send(temperatures);
});

export default router;
