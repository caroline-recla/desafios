const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    class Appointment extends Model {


        static associate(models) {
            Appointment.belongsTo(models.Patient, { foreignKey: 'patient_id', as : 'patient' });
            Appointment.hasOne(models.Doctors, { foreignKey: 'doctor_id', as : 'doctors' });
        }
        
    }
    Appointment.init({
        data_appointment: DataTypes.DATE,
    }, {
        sequelize,
        modelName:'Appointment',
        tableName:'appointments'
    })
    return Appointment;
};

