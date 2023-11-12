import { describe, expect, expectTypeOf, it } from "vitest";
import { generateUser, generateUserCreate } from "./UserServices.faker";
import "../app";
import { IUser, IUserCreate, IUserCreateReturn } from "../interfaces/IUser";
import UserServices from "./UserServices";
import axios from "axios";

describe("Testing User Service methods", () => {
    it("Should be able to generate a user data of IUser types", async () => {
        const result = await generateUser();
        expectTypeOf(result).toEqualTypeOf<IUser>;
    });

    it("Should be able to generate a user create data of IUserCreate types", async () => {
        const result = await generateUserCreate();
        expectTypeOf(result).toEqualTypeOf<IUserCreate>;
    });

    it("Should be able to create a user, and one should be able IUserCreateReturn types", async () => {
        const dataUser = await generateUserCreate();
        const result = await UserServices.create(dataUser);
        expectTypeOf(result).toEqualTypeOf<IUserCreateReturn>;
    });

    it("Should not be able to create a user an existing email address", async () => {
        try {
            const dataUser = await generateUserCreate();
            await UserServices.create(dataUser);
            await UserServices.create(dataUser);
        } catch (err: { message: string } & any) {
            expect(err.message).toBe("E-mail já cadastrado!");
        }
    });
});

describe("Testing User routes implements", () => {
    it("Should be able to create a user, and one should be able IUserCreateReturn types", async () => {
        try {
            const dataUser = await generateUserCreate();
            const URL = `${process.env.URL_TEST || "https://127.0.0.1"}:${process.env.PORT || 9001}`;
            const result = (await axios.post(URL + "/user/create", dataUser)).data as {message:IUserCreateReturn};
            expectTypeOf(result.message).toEqualTypeOf<IUserCreateReturn>;
        } catch (err: { message: string } & any) {
            console.log(err);
        }
    });
});
