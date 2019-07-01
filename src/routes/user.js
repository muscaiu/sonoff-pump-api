import { Router } from 'express';

const router = Router();

router.post('/auth', async (req, res) => {
  const users = await req.context.models.User.findAll({
    limit: 1,
    where: {},
    order: [['createdAt', 'ASC']]
  })
  const user = users.find(dbUser =>
    dbUser.username === req.body.username &&
    dbUser.password === req.body.password)
    
  if (user) return res.send(true);
  return res.send(false)
});

// router.post('/create', async (req, res) => {
//   console.log(req.body)
//   const user = await req.context.models.User.create({
//     username: req.body.username,
//     password: req.body.password,
//   });

//   if (user) return res.send(true);
//   return res.send(false)
// });

export default router;
