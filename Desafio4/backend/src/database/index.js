const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const Employee = require('../models/Employee.js');
const Doctors = require('../models/Doctors.js');
const Patient = require('../models/Patient.js');
const Appointment = require('../models/Appointment.js');


const { host, username, password, database, dialect } = config.development;

const connection = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect
});

async function connectionDatabase(){
    try {
        await connection.authenticate();
        console.log('Banco conectado');
    } catch (error) {
        console.error('Deu ruim!', error);
    }
}

Employee.init(connection);
Doctors.init(connection);
Patient.init(connection);
Appointment.init(connection);


Appointment.associate(connection.model);

module.exports = connectionDatabase;