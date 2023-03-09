import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  name: string;
}

const bodyValitadtion: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
});

export const create = async (request: Request<{}, {}, ICidade>, response: Response) => {
  let validatedData: ICidade | undefined = undefined;

  try {
    validatedData = await bodyValitadtion.validate(request.body)
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return response.json({
      error: {
        default: yupError.message,
      }
    })
  }

  console.log(validatedData);
  return response.send('City created!');
}