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
  console.log(req.body.value)
  const mode = await req.context.models.Mode.create({
    value: req.body.value,
  });

  return res.send(mode);
});

// router.get('/:messageId', async (req, res) => {
//   const message = await req.context.models.Message.findByPk(
//     req.params.messageId,
//   );
//   return res.send(message);
// });

export default router;
