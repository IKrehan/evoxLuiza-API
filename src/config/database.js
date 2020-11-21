module.exports = {
    productionConfig: {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        define: {
            timestamps: true,   
            underscored: true,
        },
    },

    developmentConfig: {
        dialect: "postgres",
        host: "localhost",
        username: "postgres",
        password: "info1590",
        database: "evoxLuiza",
        define: {
            timestamps: true,
            underscored: true,
        },
    }
};