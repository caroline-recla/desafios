'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employee', [
      {
        "employeeCode": 67895,
        "name": "Juliana Garcia Freitas",
        "cpf": '83001390018',
        "password": "1234",
        "confirmpassword": "1234"
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employee', null, {});
  }
};
