'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      cpf:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      employeeCode:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee');

  }
};
