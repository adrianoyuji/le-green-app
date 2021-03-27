import { Request, Response } from "express";

const list = async (req: Request, res: Response) => {
  return res.status(200).send("rasifude");
};

export default {
  list,
};
