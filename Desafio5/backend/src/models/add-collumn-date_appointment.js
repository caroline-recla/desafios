'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add - collumn - date_appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  add - collumn - date_appointment.init({
    date_appointment: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'add-collumn-date_appointment',
  });
  return add - collumn - date_appointment;
};