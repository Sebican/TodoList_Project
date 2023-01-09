const express = require('express');
const Routes = express.Router();
const { getTodo, postTodo, deleteById, getById, updateById } = require('../controller/todo');

//SWAGGER-DESCRIPTION--for---===todo===---Table---------------
/**
 * @swagger
 * components:
 *          schemas:
 *              todo:
 *                  type: object
 *                  properties:
 *                      id:
 *                             type: number
 *                      task:
 *                             type: string
 *                      status:
 *                             type: number
 * 
 */

///====================================================================

Routes.get("/get", getTodo);
//1.SWAGGER for GET-Method:
 /**
 * @swagger
 * /get:
 *       get:
 *          summary: NodeJs API of todo table
 *          description: NodeJs API to Test GET-Method
 *          responses:
 *               200:
 *                  description: this API is to Test GET-Method
 *                  content:
 *                        application/json:
 *                               schema:
 *                                   type: array
 *                                   items:
 *                                    $ref : '#components/schemas/todo'
 */

///====================================================================

Routes.post('/add', postTodo);
//2.SWAGGER for POST-Method:
/**
 * @swagger
 * /add:
 *    post:
 *        summary: API to Post todo
 *        description: NodeJs API to Test POST-Method
 *        requestBody: 
 *            required: true
 *            content:
 *               application/json:
 *                 schema:
 *                    $ref : '#components/schemas/todo'
 *        responses:
 *           200:
 *              description: Added successfully
 */

//====================================================================

Routes.delete('/delete/:id', deleteById);
//3.SWAGGER for DELETE-Method:
/**
 * @swagger
 * /delete/{id}:
 *  delete:
 *       summary: API to Delete todo by id
 *       description: NodeJs API to Test DELETE-Method 
 *       parameters:
 *           - in: path
 *             name: id
 *             required: true
 *             description: number id is required
 *             schema:
 *               type: string
 *       responses:
 *           200:
 *               description: To Test DELETE-Method
 */

///====================================================================

Routes.get('/get/:id', getById);
//4.SWAGGER for GET-Method:
 /**
 * @swagger
 * /get/{id}:
 *       get:
 *          summary: API to Get todo by id
 *          description: NodeJs API to Test GET-Method
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                description: number id is required
 *                schema:
 *                  type: string
 *          responses:
 *               200:
 *                  description: this API is to Test GET-Method
 *                  content:
 *                        application/json:
 *                               schema:
 *                                   type: array
 *                                   items:
 *                                    $ref : '#components/schemas/todo'
 */

///====================================================================

Routes.patch('/update/:id', updateById);
//5.SWAGGER for PATCH-Method:
/**
 * @swagger
 * /update/{id}:
 *             patch:
 *                  summary: API to Update todo by id
 *                  description: NodeJs API to Test PATCH-Method
 *                  parameters:
 *                      - in: path
 *                        name: id
 *                        required: true
 *                        description: number id required
 *                        schema:
 *                              type: string
 *                  requestBody:
 *                       required: true
 *                       content:
 *                           application/json:
 *                               schema:
 *                                  $ref : '#components/schemas/todo'
 *                  responses:
 *                         200:
 *                            description: Added successfully
 *                            content:
 *                                application/json:
 *                                     schema:
 *                                        type: array
 *                                        items:
 *                                             $ref: '#components/schemas/todo'
 *                              
 */

//====================================================================

module.exports = {Routes}