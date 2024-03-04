const express = require('express');

const authController = require('../controllers/authController.js'); 

const routes = express.Router();



routes.post("/login",authController.loginEmployee);
routes.post("/register",authController.registerWithToken);


module.exports = routes