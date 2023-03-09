import { Request, Response } from "express";

interface ICidade {
  nome: string;
}

export const create = (request: Request<{}, {}, ICidade>, response: Response) => {
  
  console.log(request.body.nome);

  return response.send('City created!');
}