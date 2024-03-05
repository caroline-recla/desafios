'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usersEmployee', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncremment: true,
        allowNull: false,
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
      },
      confirmpassword:{
        type:Sequelize.STRING,
        allowNull:false
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usersEmployee');
  }
};
