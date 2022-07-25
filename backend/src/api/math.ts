import express, {Request, Response} from 'express';
import {check, validationResult} from 'express-validator';

const router = express.Router();

router.post('/sum', async (req: Request, res: Response) => {
  await check('number1', 'Input number is invalid').isNumeric().run(req);
  await check('number2', 'Input number is invalid').isNumeric().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const {number1, number2} = req.body;

  return res.json({number1, number2, sum: number1 + number2})
})

export default router;