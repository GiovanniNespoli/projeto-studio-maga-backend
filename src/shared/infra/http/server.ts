import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import '@shared/infra/typeorm';
import '@shared/container/providers/index';
import app from './app/app';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`✔✔ Server running on ${port}!`);
});
