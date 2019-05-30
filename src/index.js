import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('woot')
})

app.listen(process.env.PORT, () =>
  console.log(`API running on http://localhost:${process.env.PORT}`),
);
