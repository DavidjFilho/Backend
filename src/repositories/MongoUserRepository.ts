import {
  IUserRepository,
  IUser,
  IUserCreate,
  IUserFindByObject,
} from "../interfaces/IUser";
import { User } from "../models/User";

class MongoUserRepository implements IUserRepository {
  async findByObject(userData: IUserFindByObject): Promise<IUser | null> {
    return await User.findOne(userData);
  }

  async findAll(): Promise<IUser[]> {
    return await User.find();
  }

  async createUser(userCreateData: IUserCreate): Promise<IUser> {
    return await new User(userCreateData).save();
  }
}

export default new MongoUserRepository();
