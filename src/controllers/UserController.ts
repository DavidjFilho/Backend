import { Request, Response } from "express";
import { IUserController } from "../interfaces/IUser";

class UserController implements IUserController {
  async create(req: Request, res: Response): Promise<Response> {
    return res.status(201).json({ message: "Hello world!" });
  }
  async getUser(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "Hello world!" });
  }
  async getUsers(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "TA CHEGANDO LAAA" });
  }
  async update(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "Hello world!" })
  }
  async delete(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "Hello world!" });
  }
}

export default new UserController();
