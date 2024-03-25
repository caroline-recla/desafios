const { Model,DataTypes } = require('sequelize');
class Appointment extends Model {
    static init(sequelize) {
        super.init({
            cpf: DataTypes.STRING,
            dataBirth: DataTypes.STRING,
            name: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
        }, {
            sequelize,
            modelName: 'Patient',
            tableName: 'patient',
            timestamps:false
        })
    }
};


module.exports = Appointment;