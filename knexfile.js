require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
            user: process.env.DB_USER,
            port: 3306
        },
        pool: { min: 2, max: 7 },
        migration: {
            tableName: 'knex_migrations'
        }
    }
};