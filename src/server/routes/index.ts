import { Router } from "express";
import { StatusCodes } from 'http-status-codes';

import { CidadeController } from "./../controllers";


const router = Router();

router.get('/', (request, response) => {
  return response.send("Hello World!");
});

router.post('/cidades', CidadeController.createBodyValidator,CidadeController.create);

export {router};