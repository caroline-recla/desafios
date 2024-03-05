const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Patient extends Model {


        static associate(models) {
            Patient.hasMany(models.Appointment, { foreignKey: 'appointment_id', as: 'appointment' });
        }

    }
    Patient.init({
        cpf: DataTypes.STRING,
        dataBirth: DataTypes.DATEONLY,
        name: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Patient',
        tableName: 'patients'
    })
    return Patient;
};
