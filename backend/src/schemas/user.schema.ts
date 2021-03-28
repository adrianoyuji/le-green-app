import Joi from "joi";

const userSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  cpf: Joi.string().required(),
  email: Joi.string().required().email().trim(),
  vip: Joi.boolean().required(),
  gender: Joi.string().valid("Masculino", "Feminino", "Outro"),
  password: Joi.string().required(),
  role: Joi.string().valid("ADMIN", "USER"),
  address: Joi.object({
    city: Joi.string(),
    country: Joi.string(),
    state: Joi.string(),
  }),
  birthdate: Joi.date(),
});

export { userSchema };
