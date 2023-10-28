import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new Schema<IUser>({
  id: { type: String, unique: true, required: true, trim: true },
  email: { type: String, unique: true, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  phone: { type: String, unique: true, trim: true },
  anddresses: [
    {
      street: { type: String, required: true, trim: true },
      street_number: { type: String, required: true, trim: true },
      zipcode: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      complement: { type: String, trim: true },
    },
  ],
});

const User = mongoose.model("users", UserSchema);

export { User };
