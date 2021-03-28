import { Request, Response } from "express";
import { authSchema, tokenSchema } from "../schemas/auth.schema";
import { verify, sign } from "jsonwebtoken";
import User from "../models/User";
import bcrypt from "bcrypt";

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email ou Senha inválidos" });

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({ message: "Email ou Senha inválidos" });

  const {
    first_name,
    last_name,
    vip,
    cpf,
    gender,
    role,
    address,
    birthdate,
    createdAt,
    updatedAt,
    _id,
  } = user;

  const passwordMatched = await bcrypt.compare(password, user.password);

  if (!passwordMatched)
    return res.status(400).json({ message: "Email ou Senha inválidos" });

  const token = sign({ id: user._id }, process.env.TOKEN_SECRET || "", {
    subject: user.first_name,
    expiresIn: "12h",
  });

  return res.status(200).json({
    user: {
      _id,
      first_name,
      last_name,
      vip,
      cpf,
      gender,
      role,
      address,
      birthdate,
      updatedAt,
      createdAt,
      email,
    },
    token,
  });
};

const validateToken = async (req: Request, res: Response) => {
  const { error } = tokenSchema.validate(req.body);
  if (!!error) return res.status(400).json({ error });

  const { token } = req.body;
  const verified = verify(
    token.replace("Bearer ", ""),
    process.env.TOKEN_SECRET || ""
  );

  if (verified) {
    return res.status(200).send("valid token");
  } else {
    return res.status(401).send("invalid token");
  }
};

export default {
  signIn,
  validateToken,
};
