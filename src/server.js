import cors from 'cors';
import express from 'express';

// import { resolve } from "path";

import router from './routes';

const app = express();

app.use(express.json());
// app.use(express.static(resolve(__dirname, "..", "public", "contato")));
app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
  }),
);

app.use(router);

app.listen(3333, () => {
  console.log('No ar http://localhost:3333 🔥🔥🚒');
});
