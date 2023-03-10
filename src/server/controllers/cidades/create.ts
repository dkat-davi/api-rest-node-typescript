import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  nome: string;
}

const bodyValitadtion: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  state: yup.string().required().min(3),
});

export const create = async (request: Request<{}, {}, ICidade>, response: Response) => {
  let validatedData: ICidade | undefined = undefined;

  try {
   
    validatedData = await bodyValitadtion.validate(request.body, { abortEarly: false})

  } catch (error) {
    
    const yupError = error as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if(!error.path) return;
      errors[error.path] = error.message;
    })
    

    return response.status( StatusCodes.BAD_REQUEST).json({ errors })
  }

  console.log(validatedData);
  return response.send('City created!');
}