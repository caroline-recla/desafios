const express = require("express");
const PatientController = require("../controllers/patientController.js");

const routes = express.Router();

routes.get("/list-patient", PatientController.getAllPatient);
routes.get("/get-id/:id", PatientController.getPatientById);

routes.post("/searchCpf", PatientController.getPatientByCpf);
routes.post("/newPatient", PatientController.newPatient);

routes.put("/update/:id", PatientController.updatePatient);
routes.delete("/delete-patient/:id", PatientController.deletePatient);

module.exports = routes;
