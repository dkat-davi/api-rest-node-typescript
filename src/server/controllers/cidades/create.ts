import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middlewares";

interface ICidade {
  nome: string;
}

export const createValidation = validation((getSchema) => ({

  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),

}));


export const create = async (request: Request<{}, {}, ICidade>, response: Response) => {
  
  console.log(request.body);

  return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not Implemented');
}