import * as math from "./math";
import express from 'express';

const setupRouter = (app: express.Application) => {
  app.use('/math', math.default)
}

export default setupRouter;