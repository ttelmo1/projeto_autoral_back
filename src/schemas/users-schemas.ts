import Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

export const validateLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
