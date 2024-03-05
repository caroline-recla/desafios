const { Model, DataTypes } = require('sequelize');

class Doctors extends Model{
    static init(sequelize) {
        super.init({
            name:DataTypes.STRING,
            specialization:DataTypes.STRING
        },{
            sequelize,
            modelName:'Doctors',
            tableName:'doctors'
        })
    }
}

module.exports = Doctors;