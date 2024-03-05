const { Model, DataTypes } = require('sequelize');

class Appointment extends Model {
    static init(sequelize) {
        super.init({
            patient_id: DataTypes.INTEGER,
            doctor_id: DataTypes.INTEGER,
            data_appointment: DataTypes.DATE,
        }, {
            sequelize,
            modelName:'Appointment',
            tableName:'appointments'
        });
    }
      
    Appointment.hasOne(Patient, {foreignKey: 'patient_id', as: 'patient'});
}



module.exports = Appointment;