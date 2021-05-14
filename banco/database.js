const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'acs985862',
        database: 'knexjs'
    }
})

module.exports = knex;