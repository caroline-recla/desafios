const { Model, DataTypes } = require("sequelize");

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        patient_cpf: DataTypes.STRING,
        patient_name: DataTypes.STRING,
        patient_birthDate: DataTypes.STRING,
        patient_phone: DataTypes.STRING,

        doctor_name: DataTypes.STRING,
        doctor_specialisation: DataTypes.STRING,
      },
      {
        modelName: "Appointment",
        freezeTableName: true,
        tableName: "appointment",
        sequelize,
        timestamps: false,
      }
    );
  }
}

module.exports = Appointment;
