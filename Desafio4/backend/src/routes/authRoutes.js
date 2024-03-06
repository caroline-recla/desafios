const express = require('express');
const authController = require('../controllers/authController.js');


const authRoutes = express.Router();


authRoutes.post("/auth/login", authController.loginEmployee);
authRoutes.post("/auth/register", authController.registerWithToken);

module.exports = authRoutes;
