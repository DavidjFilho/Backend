import * as yup from "yup";
import { BadRequestError } from "../helpers/API-Error";

class Utils {
    public async validationData(shape: any, data: object) {
        try {
            let schema = yup.object().shape(shape);

            return await schema.validate(data);
        } catch (error: any) {
            console.log(error);
            //ERRO É CAPTADO PELA MIDDLEWARES GLOBAL DE ERROS
            throw new BadRequestError(error.message);
        }
    }
}

export default new Utils();
