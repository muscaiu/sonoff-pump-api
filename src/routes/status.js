import { Router } from 'express';
import pompaSonoff from '../sonoffs/pompaSonoff';

const router = Router();

router.get('/', async (req, res) => {
  const status = await req.context.models.Status.findOne().sort({ createdAt: -1 });
  pompaSonoff().then(async data => {
    const { temperature } = data;
    const fullStatus = { status, temperature }
    return res.send(fullStatus);
  })
  // return res.send(status);

});

router.get('/list', async (req, res) => {
  const list = await req.context.models.Status.find();
  return res.send(list);
});

router.post('/create', async (req, res) => {
  const status = await req.context.models.Status.create({
    value: req.body.value,
    // user: req.context.me.id
  })

  return res.send(status);
});

export default router;
