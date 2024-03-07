import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import {StatusCodes} from 'http-status-codes';

import { router } from './Routes';
import 'dotenv/config';


const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.use((err: Error, req: Request, res: Response)=>{
  if(err instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: err.message
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: 'Internal Server Error.'
  });
});

app.listen(process.env.PORT || 3333, () => console.log(`Servidor Online na porta ${process.env.PORT || 3333}`));


