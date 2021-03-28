import { Request, Response } from "express";
import { userSchema } from "../schemas/user.schema";
import User from "../models/User";
import bcrypt from "bcrypt";

const create = async (req: Request, res: Response) => {
  const { error } = userSchema.validate(req.body);

  if (!!error)
    return res.status(400).json({ message: error.details[0].message });

  const {
    first_name,
    last_name,
    cpf,
    vip,
    email,
    gender,
    password,
    role,
    address,
    birthdate,
  } = req.body;

  const invalidEmail = await User.findOne({ email: email });

  if (!!invalidEmail)
    return res.status(400).json({ message: "Email já cadastrado!" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    first_name,
    last_name,
    cpf,
    vip,
    email,
    gender,
    password: hashedPassword,
    role,
    address,
    birthdate,
  });

  await user.save();

  return res.status(200).json({ user });
};

export default {
  create,
};
