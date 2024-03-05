const { Sequelize } = require('sequelize');
const config = require('../config/config.json');
const UserEmployee = require('../models/Employee.js');

const { host, username, password, database, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect
});

async function connectionDatabase(){
    try {
        await sequelize.authenticate();
        console.log('Banco conectado');
    } catch (error) {
        console.error('Deu ruim!', error);
    }
}

UserEmployee.init(sequelize)

module.exports = connectionDatabase;