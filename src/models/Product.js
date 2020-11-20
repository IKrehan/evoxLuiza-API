const { Model, DataTypes } = require('sequelize');


class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.FLOAT,
            url_image: DataTypes.STRING,
            url: DataTypes.STRING
        }, {
            sequelize
        })

    }
}

module.exports = Product;