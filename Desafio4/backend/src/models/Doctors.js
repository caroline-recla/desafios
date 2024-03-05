const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    class Doctors extends Model {


        static associate(models) {
            Doctors.hasMany(models.Appointment, { foreignKey: 'appointment_id', as : 'appointments' });
        }
        
    }
    Doctors.init({
        name:DataTypes.STRING,
        specialization:DataTypes.STRING
    }, {
        sequelize,
        modelName:'Doctors',
        tableName:'doctors'
    })
    return Doctors;
};
