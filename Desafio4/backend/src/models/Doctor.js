const { Model, DataTypes } = require('sequelize');

class Doctor extends Model {
    static init(sequelize) {
        super.init({
            name:DataTypes.STRING,
            specialization:DataTypes.STRING
        }, {
            sequelize,
            modelName:'Doctors',
            tableName:'doctors',
            timestamps:false
        })
    }
};

module.exports = Doctor