const express = require('express');
const userController = require('../controller/userController');
const route = express.Router();

/** 
 * @swagger 
 * /api/user/createUser: 
 *   post: 
 *     summary: API to add new users.
 *     description: Creates a new users by inserting new users data to the database. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 description: Name of the new users 
 *                 type: String
 *                 example: Alex
 *               email:
 *                 description: Email of the users
 *                 type: String  
 *                 example: Alex@gmail.com
 *               password:
 *                 description: Password of the users
 *                 type: String
 *                 example: alex123
 *               address:
 *                 description: Address of the users
 *                 type: String  
 *                 example: India
 *     responses:  
 *       200: 
 *         description: Created  
 */ 
route.post('/createUser', userController.createUser);

/**
 * @swagger
 * /api/user/getAllUsers:
 *   get:
 *     summary: API to fetch all the users.
 *     description: Retrieve list of users present in the database.
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: No users available in the repo
*/
route.get('/getAllUsers', userController.getAllUsers);

/** 
 * @swagger 
 * /api/user/updateUser/{id}: 
 *   put: 
 *     summary: API to update existing users..
 *     description: Updates users data to the database. 
 *     parameters: 
 *     - in: path
 *       name: id 
 *       description: Id to retrieve the users
 *       required: true 
 *       type: String 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 description: Name of the new users 
 *                 type: String
 *                 example: Alex
 *               email:
 *                 description: Email of the users
 *                 type: String  
 *                 example: Alex@gmail.com
 *               password:
 *                 description: Password of the users
 *                 type: String
 *                 example: alex123
 *               address:
 *                 description: Address of the users
 *                 type: String  
 *                 example: India
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */  
route.put('/updateUser/:id', userController.updateUser);

/** 
 * @swagger 
 * /api/user/deleteUser/{id}: 
 *   delete: 
 *     summary: API to delete existing users.
 *     description: This will delete users data based on id from the database . 
 *     parameters: 
 *     - in: path
 *       name: id 
 *       description: Id to retrieve the users
 *       required: true 
 *       type: String 
 *     responses:  
 *       200: 
 *         description: Success  
 */  
route.delete('/deleteUser/:id', userController.deleteUser);

route.all('*', userController.invalid);

module.exports = route;