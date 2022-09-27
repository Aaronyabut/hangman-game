import express, { Express, Request, Response } from 'express';
import router from './router';
require("dotenv").config()

const app: Express = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use('/faang', router)


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});