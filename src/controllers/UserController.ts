import { Request, Response } from "express";
import { IUserController, IUserCreate, IUserPartial } from "../interfaces/IUser";

class UserController implements IUserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const userCreateData: IUserCreate = { name, email, password };
    const result = userCreateData;
    return res.status(201).json(result);
  }
  async getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const result = id;
    return res.json(result);
  }
  async getUsers(req: Request, res: Response): Promise<Response> {
    const result ="alo";
    return res.json(result);
  }
  async update(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const userUpdateData: IUserPartial = { name, email, password };
    const id = req.params.id;
    const result = userUpdateData;
    return res.json(result);
  }
  async delete(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const result = id;
    return res.json(result);
  }
}

export default new UserController();
