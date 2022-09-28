import { Router, Request, Response } from 'express';
const router = Router();
import { getAllData, postNewData } from '../database/db';


router.get('/man', async(req: Request, res: Response) => {
  try {
    const getData = await getAllData()
    res.send(getData).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

router.post('/man', async(req: Request, res: Response) => {
  // console.log('POSTING NOW')
  try {
    const { keyword, category, hint } = req.body;
    const postData = await postNewData(keyword, category, hint);
    res.sendStatus(201);
  } catch(err) {
    res.send(err).status(400);
  }
})

export default router;

/*

{
  "keyword": "los angeles",
  "category": "US City",
  "hint": "This is in Calfornia"
}

{
  "keyword": "javascript",
  "category": "Tech Stack",
  "hint": ""
}

{
  "keyword": "google",
  "category": "Tech Company",
  "hint": ""
}
*/