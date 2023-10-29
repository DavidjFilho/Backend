import { HttpStatusCode } from "../constants/HttpStatusCode";
import { IUser, IUserCreate, IUserPartial, IUserServices, IUserServicesReturn } from "../interfaces/IUser";

import * as yup from "yup";
import md5 from "md5";
import { v4 } from "uuid";
import MongoUserRepository from "../repositories/MongoUserRepository";
import Util from "../Utils/Util";
import { BadRequestError } from "../helpers/API-Error";

class UserServices implements IUserServices {
    async create(userCreateData: IUserCreate): Promise<IUserServicesReturn> {
        const userSchema = {
            name: yup.string().required("O Campo nome é obrigatório!").min(3, "O nome necessita de no mínimo três caracteres!").trim(),
            email: yup
                .string()
                .required("O Campo e-mail é obrigatório!")
                .min(10, "O e-mail necessita de no mínimo dez caracteres!")
                .email("Informe um e-mail válido!"),
            password: yup
                .string()
                .required("O campo senha é obrigatório!")
                .min(8, "A senha necessita de no mínimo oito caracteres!")
                .max(16, "A senha necessita de no máximo dezesseis caracteres!")
                .trim(),
        };
        const userDataValidate = await Util.validationData(userSchema, userCreateData);

        const { name, email, password } = userDataValidate;

        const userExists = await MongoUserRepository.findByObject({ email });

        if (userExists) {
            throw new BadRequestError("E-mail já cadastrado!");
        }

        const hashPassword = md5(password + process.env.SALT_KEY);
        const id = v4();

        const userData: IUser = {
            id,
            name,
            email,
            password: hashPassword,
        };
        const user = await MongoUserRepository.createUser(userData);

        return {
            statusCode: HttpStatusCode.Created,
            message: user,
        };
    }

    async getUser(id: string): Promise<IUserServicesReturn> {
        return {
            statusCode: HttpStatusCode.OK,
            message: "",
        };
    }

    async getUsers(): Promise<IUserServicesReturn> {
        return {
            statusCode: HttpStatusCode.OK,
            message: "",
        };
    }

    async update(userUpdateData: IUserPartial, id: string): Promise<IUserServicesReturn> {
        return {
            statusCode: HttpStatusCode.OK,
            message: "",
        };
    }

    async delete(id: string): Promise<IUserServicesReturn> {
        return {
            statusCode: HttpStatusCode.OK,
            message: "",
        };
    }
}

export default new UserServices();
