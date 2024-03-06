const { Model, DataTypes } = require('sequelize');

class Appointment extends Model {
    static init(sequelize) {
        super.init({
            patient_id:DataTypes.INTEGER,
            doctor_id:DataTypes.INTEGER
        }, {
            modelName: 'Appointment',
            freezeTableName: true,
            tableName: 'appointment',
            sequelize,
            timestamps:false

        })
    }
};

module.exports = Appointment;
