import { Router } from "express";
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (request, response) => {
  return response.send("Hello World!");
});

router.post('/test', (request, response) => {
  return response.status(StatusCodes.UNAUTHORIZED).json(request.body);
});

router.post('/params/:params', (request, response) => {
  return response.send(`
    Definition = /params/:params 
    URL = /params/params 
    Return = ${request.params.params}`);
});

router.post('/query', (request, response) => {
  return response.send(`
    Definition = /params 
    URL = /params?query=value 
    Return = ${request.query.query}`);
});

export {router};