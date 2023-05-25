import { Request, Response, NextFunction } from 'express';

export function defaultErrorMiddleware(err: Error, req: Request, res: Response, _: NextFunction): Response {
  console.log(err);
  return res.status(500).json({
    status: 500,
    message: 'Internal Error',
  });
}
