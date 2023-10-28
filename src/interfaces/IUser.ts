import mongoose from "mongoose";

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  anddresses?: [
    {
      street: string;
      street_number: string;
      zipcode: string;
      city: string;
      state: string;
      complement?: string;
    }
  ];
}

interface IUserPartial {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

interface IUserCreateReturn {}

interface IUserFindByObject {
  _id?: mongoose.Types.ObjectId;
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
}

interface IUserRepository {
  findByObject(userData: IUserFindByObject): Promise<IUser | null>;

  findAll(): Promise<IUser[]>;

  createUser(userCreateData: IUserCreate): Promise<IUser>;
}

export {
  IUser,
  IUserPartial,
  IUserCreate,
  IUserCreateReturn,
  IUserRepository,
  IUserFindByObject,
};
