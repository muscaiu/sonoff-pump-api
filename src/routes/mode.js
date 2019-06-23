import { Router } from 'express';
import { pompadb } from '../models';
const router = Router();

router.get('/', async (req, res) => {
  // const mode = await req.context.models.Mode.findOne().sort({ createdAt: -1 });
  // return res.send(mode);
  // pompadb.get('mode', function (error, body, headers) {
  //   if (error) {
  //     res.status(error.statusCode)
  //     return res.send(error.message)
  //   }
  //   res.status(200)
  //   res.send(body)
  // })

  // pompadb.view('modedesign', 'modeview')
  //   .then((body) => {
  //     const lastMode = body.rows.length - 1;
  //     res.send(body.rows[lastMode].value)
  //   })
  //   .catch(err => {
  //     res.status(error.statusCode)
  //     return res.send(err.message)
  //   })

  const q = {
    selector: {
      type: { "$eq": "mode" }
    },
    fields: ["value", "createdAt"],
  };

  pompadb.find(q).then((modes) => {
    return res.send(modes.docs[modes.docs.length - 1])
  });
});

// router.get('/:modeId', async (req, res) => {
//   const mode = await req.context.models.Mode.findById(
//     req.params.modeId,
//   )
//   return res.send(mode);
// });

router.post('/create', async (req, res) => {
  const mode = await pompadb.insert({
    value: req.body.value,
    createdAt: new Date(),
    type: 'mode'
  })
  if (mode.ok) {
    res.send({
      value: req.body.value,
      createdAt: new Date()
    });
  }
  // const mode = await req.context.models.Mode.create({
  //   value: req.body.value,
  //   // user: req.context.me.id
  // })

  // pompadb.get({ value: 'mode' }, { revs_info: true })
  //   .then((body) => {
  //     console.log(body);
  //   });

  // pompadb.insert({
  //   value: req.body.value,
  //   createdAt: new Date()
  // }).then((mode) => {
  //   console.log('mode:', mode)
  //   return res.send(mode);
  // });
});

export default router;
