const express = require('express');
const DoctorsController = require('../controllers/doctorController.js');

const routes = express.Router();

routes.get('/doctor/list-doctors', DoctorsController.getAllDoctors);

routes.post("/doctor/newDoctor",DoctorsController.newDoctor);




module.exports = routes;

