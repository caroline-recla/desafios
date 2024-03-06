const { Model, DataTypes } = require('sequelize');

class Employee extends Model {
    static init(sequelize) {
        super.init({
            employeeCode: DataTypes.INTEGER,
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            modelName: "Employee",
            freezeTableName: true,
            tableName: "employee",
            sequelize,
            timestamps:false
        })
    }
}

module.exports = Employee;
