"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (request, response) => {
    return response.send("Hello World!");
});
router.post('/test', (request, response) => {
    return response.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(request.body);
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
