const express = require('express');
const userController = require('../controller/userController');
const route = express.Router();

route.post('/createUser', userController.createUser);

route.get('/getAllUsers', userController.getAllUsers);

route.put('/updateUser/:id', userController.updateUser);

route.delete('/deleteUser/:id', userController.deleteUser);

route.all('*', userController.invalid);

module.exports = route;