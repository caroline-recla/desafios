import express from 'express';
import employee from "./employeeRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Sistema de Gestão Hospitalar"));

    app.use(express.json(), employee);
};

export default routes;