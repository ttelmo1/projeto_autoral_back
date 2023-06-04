import { Router } from 'express';

import { createUserSchema, validateLoginSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { signUp, signIn } from '@/controllers';

const usersRouter = Router();

usersRouter.post('/sign-up', validateBody(createUserSchema), signUp);
usersRouter.post('/sign-in', validateBody(validateLoginSchema), signIn);

export { usersRouter };
