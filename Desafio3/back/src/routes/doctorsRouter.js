import express from 'express';
import DoctorsController from '../controllers/doctorsController';

const routes = express.Router();

routes.get('/doctors', DoctorsController.getAllDoctors);

routes.post("/doctor",DoctorsController.newDoctor);




export default routes;