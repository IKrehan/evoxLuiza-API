require('dotenv').config()

module.exports = {
    developmentConfig: {
        dialect: "postgres",
        host: process.env.DBCONFIG_HOST,
        username: process.env.DBCONFIG_USER,
        password: process.env.DBCONFIG_PASS,
        database: process.env.DBCONFIG_DATABASE,
        define: {
            timestamps: true,
            underscored: true,
        },
    }
};