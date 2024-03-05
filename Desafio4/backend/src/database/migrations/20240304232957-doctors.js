'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('doctors', { 
    id: {
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false 
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    specialization:{
      type:DataTypes.STRING,
      allowNull:false
    },
    appointment:[{
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{ model: 'appointment', key: 'id'},
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
  }]
  });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('doctors');
  }
};
