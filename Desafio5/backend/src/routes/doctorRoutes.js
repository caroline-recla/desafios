const express = require('express');
const DoctorsController = require('../controllers/doctorController');

const routes = express.Router();

routes.get('/list-doctors', DoctorsController.getAllDoctors);

routes.post("/new-doctor",DoctorsController.newDoctor);

