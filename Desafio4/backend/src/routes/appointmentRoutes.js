const express = require('express');
const AppointmentController = require('../controllers/appointmentController.js');


const routes = express.Router();

routes.get("/list-appointment", AppointmentController.getAllAppointments);
routes.get("/get-id/:id", AppointmentController.getAppointmentById);

routes.post("/new-appointment",AppointmentController.newAppointment);

routes.put("/update/:id", AppointmentController.updateAppointment);
routes.delete("/delete-appointment/:id", AppointmentController.deleteAppointment);


module.exports = routes;