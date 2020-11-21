const Sequelize = require("sequelize");
const { productionConfig, developmentConfig } = require('../config/database');

const Product = require('../models/Product');


const isProduction = process.env.NODE_ENV === 'production'

const connection = new Sequelize(isProduction ? productionConfig : developmentConfig);

Product.init(connection);

module.exports = connection;