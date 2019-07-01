import { Router } from 'express';

const router = Router();

router.post('/create', async (req, res) => {
  console.log(req.body)
  const user = await req.context.models.User.create({
    username: req.body.username,
    password: req.body.password,
  });

  console.log('user:', user)
  if (user) return res.send(true);
  return res.send(false)
});

router.post('/auth', async (req, res) => {
  const users = await req.context.models.User.findAll({
    limit: 1,
    where: {},
    order: [['createdAt', 'ASC']]
  })
  const user = users.find(dbUser =>
    dbUser.username === req.body.username &&
    dbUser.password === req.body.password)
    
  console.log('user:', user)
  if (user) return res.send(true);
  return res.send(false)
});

// router.get('/', async (req, res) => {
//   const users = await req.context.models.User.find();
//   return res.send(users);
// });

// router.get('/:userId', async (req, res) => {
//   const user = await req.context.models.User.findById(
//     req.params.userId,
//   )
//   return res.send(user);
// });

export default router;
