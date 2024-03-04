const express = require('express');
const auth = require ('./authRoutes.js');
const appointment = require('./appointmentRoutes.js');
const doctor = require('./doctorRoutes.js');

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Sistema de Gestão Hospitalar"));
    app.use('/auth',auth);
};


// app.use('/doctor',doctor);
// app.use('/appointment', appointment);

module.exports = routes 