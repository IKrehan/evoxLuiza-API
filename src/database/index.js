const Sequelize = require("sequelize");
const { developmentConfig } = require('../config/database');

const Product = require('../models/Product');


const isProduction = process.env.NODE_ENV === 'production'

const connection = new Sequelize(isProduction ? process.env.DATABASE_URL : developmentConfig);

Product.init(connection);

module.exports = connection;