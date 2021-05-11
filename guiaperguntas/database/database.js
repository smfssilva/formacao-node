const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'acs985862', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection