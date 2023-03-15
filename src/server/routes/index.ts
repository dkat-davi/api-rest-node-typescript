import { Router } from "express";
import { StatusCodes } from 'http-status-codes';

import { CidadeController } from "./../controllers";


const router = Router();

router.get('/', (request, response) => {
  return response.send("Hello World!");
});

router.get('/cidades', CidadeController.getAllValidation, CidadeController.getAll);
router.post('/cidades', CidadeController.createValidation, CidadeController.create);


export {router};