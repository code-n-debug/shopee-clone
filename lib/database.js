const config = require('../knexfile');
const knex = require('knex')(config["development"]);

knex.queryBuilder().select(knex.raw("version()")).then(data=>{
    console.log('DB Connected!');
}).catch(error=>{
    console.log('Cant connect to Database!');
    throw error;
});

module.exports = knex;