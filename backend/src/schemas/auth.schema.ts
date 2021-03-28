import Joi from "joi";

const authSchema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

const tokenSchema = Joi.object({
  token: Joi.string().required(),
});

export { authSchema, tokenSchema };
