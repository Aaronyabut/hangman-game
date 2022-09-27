import { Router, Request, Response } from 'express';
const router = Router();
import { getAllData, postNewData } from '../database/db';

// console.log('TEST SERVER')

router.get('/man', async (req: Request, res: Response) => {
  try {
    const getData = await getAllData()
    console.log('TESTING DATAA', getData)
    // res.send(getData).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

router.post('/man', (req: Request, res: Response) => {
  postNewData(req.body)
})

export default router;