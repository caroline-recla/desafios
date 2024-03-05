const { Model, DataTypes } = require('sequelize');

class Patient extends Model{
    static init(sequelize) {
        super.init({
            cpf:DataTypes.STRING,
            dataBirth:DataTypes.DATEONLY,
            name:DataTypes.STRING,
            phoneNumber:DataTypes.STRING,
        },{
            sequelize,
            modelName:'Patient',
            tableName:'patients'
        })
    }
}

module.exports = Patient;