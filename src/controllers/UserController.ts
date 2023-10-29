import { Request, Response } from "express";
import { IUserController, IUserCreate, IUserPartial } from "../interfaces/IUser";
import UserServices from "../services/UserServices";

class UserController implements IUserController {
    async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;
        const userCreateData: IUserCreate = { name, email, password };
        const result = await UserServices.create(userCreateData);
        return res.status(result.statusCode).json({ message: result.message });
    }
    async getUser(req: Request, res: Response): Promise<Response> {
        const id: string = req.params.id;
        const result = id;
        return res.json(result);
    }
    async getUsers(req: Request, res: Response): Promise<Response> {
        const result = "alo";
        return res.json(result);
    }
    async update(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;
        const userUpdateData: IUserPartial = { name, email, password };
        const id: string = req.params.id;
        const result = userUpdateData;
        return res.json(result);
    }
    async delete(req: Request, res: Response): Promise<Response> {
        const id: string = req.params.id;
        const result = id;
        return res.json(result);
    }
}

export default new UserController();
