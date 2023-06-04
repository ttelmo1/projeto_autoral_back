import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import userService from '@/services/users-service';

export async function signUp(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body;
  try {
    await userService.createUser({ name, email, password });
    return res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    next(err);
  }
}

export async function signIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  try {
    const token = await userService.login(email, password);
    return res.send({ token });
  } catch (err) {
    next(err);
  }
}
