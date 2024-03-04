const { Model, DataTypes } = require('sequelize');

class UserEmployee extends Model{
    static init(sequelize) {
        super.init({
            employeeCode:DataTypes.INTEGER,
            name:DataTypes.STRING,
            cpf:DataTypes.STRING,
            password: DataTypes.STRING,
            confirmpassword:DataTypes.STRING

        },{
            sequelize
        })
    }
}

module.exports = UserEmployee;