const { Model, DataTypes } = require('sequelize');

class Employee extends Model{
    static init(sequelize) {
        super.init({
            employeeCode:DataTypes.INTEGER,
            name:DataTypes.STRING,
            cpf:DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize,
            modelName:'Employee',
            tableName:'employees'
        })
    }
}

module.exports = Employee;