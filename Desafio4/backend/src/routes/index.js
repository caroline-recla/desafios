const express = require('express');
const auth = require('./authRoutes.js');
const appointment = require('./appointmentRoutes.js');
const doctor = require('./doctorRoutes.js');
const patient = require('./patientRoutes.js')

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Sistema de Gestão Hospitalar"));

    app.use(express.json(),auth, doctor, appointment, patient);
};


module.exports = routes 