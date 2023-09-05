const { Model, DataTypes } = require("sequelize");


class Address extends Model{
    static init(sequelize){
        super.init({
            country:DataTypes.STRING,
            city: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING,
            district: DataTypes.STRING
        }, {sequelize })
    }
}

module.exports = Address