import { Router } from 'express';

const router = Router();

router.get('/list', async (req, res) => {
  const temperatures = await req.context.models.Temperature.findAll({
    // limit: 100,
    // where: {},
    order: [['createdAt', 'ASC']]
  })
  return res.send(temperatures);
});

export default router;
