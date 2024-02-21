import express from 'express';
import AppointmentController from '../controllers/appointmentController.js';


const routes = express.Router();

routes.get("/appointment", AppointmentController.getAllAppointments);
routes.get("/appointment/:id", AppointmentController.getAppointmentById);
routes.post("/appointment",AppointmentController.newAppointment);
routes.put("/appointment/:id", AppointmentController.updateAppointment);
routes.delete("/appointment/:id", AppointmentController.deleteAppointment);


export default routes;