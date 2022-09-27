import express, { Express } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json);


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});