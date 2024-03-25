"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("appointment", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      patient_cpf: {
        type: Sequelize.STRING,
      },
      patient_name: {
        type: Sequelize.STRING,
      },
      patient_birthDate: {
        type: Sequelize.STRING,
      },
      patient_phone: {
        type: Sequelize.STRING,
      },
      doctor_name: {
        type: Sequelize.STRING,
      },
      doctor_specialisation: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("appointment");
  },
};
