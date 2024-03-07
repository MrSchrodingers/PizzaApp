import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verify } from 'jsonwebtoken';

interface IPayLoadProps{
  sub: string
}

export const IsAuth = (req: Request, res: Response, next: NextFunction) => {

  const authToken = req.headers.authorization;

  if(!authToken){
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }
  const [, token] = authToken.split(' ');


  try {
    const { sub } = verify(
      token,
      process.env.JWT_SECRET || '123',
    ) as IPayLoadProps;

    req.user_id = sub;
    return next();

  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }
};
