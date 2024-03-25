const { Sequelize } = require("sequelize");
const config = require("../config/config.json");

const Employee = require("../models/Employee.js");
const Appointment = require("../models/Appointment.js");
const Patient = require("../models/Patient.js");
const Doctor = require("../models/Doctor.js");

const { host, username, password, database, dialect } = config.development;

const connection = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

async function connectionDatabase() {
  try {
    await connection.authenticate();
    console.log("Banco conectado");
  } catch (error) {
    console.error("Deu ruim!", error);
  }
}

Employee.init(connection);
Appointment.init(connection);
Patient.init(connection);
Doctor.init(connection);

(module.exports = connectionDatabase), connection;
