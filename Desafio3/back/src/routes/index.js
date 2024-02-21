import express from 'express';
import employee from "./employeeRoutes.js";
import appointment from './appointmentRoutes.js'

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Sistema de Gestão Hospitalar"));

    app.use(express.json(), employee, appointment);
};

export default routes;