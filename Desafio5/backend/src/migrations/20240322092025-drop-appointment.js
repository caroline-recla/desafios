"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable("appointment");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.createTable("appointment");
  },
};
