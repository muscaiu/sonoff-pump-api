import { Router } from 'express';
import { pompadb } from '../models';

const router = Router();

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

router.post('/auth', async (req, res) => {
  // const users = await req.context.models.User.find();
  // const user = users.find(dbUser =>
  //   dbUser.username === req.body.username &&
  //   dbUser.password === req.body.password)

  // if (user) return res.send(true);
  // return res.send(false)
  res.send(true);
});

export default router;
