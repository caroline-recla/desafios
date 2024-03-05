'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointment', {
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      patient_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: 'patient', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      doctor_id : {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: 'doctors', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }
       });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointment');
  }
};
