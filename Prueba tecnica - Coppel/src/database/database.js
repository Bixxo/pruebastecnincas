const { Sequelize } = require('sequelize')
const modelDepartamento = require('../models/Departamento.js')

const sequelize = new Sequelize('category', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

modelDepartamento(sequelize)

module.exports = {
    ...sequelize.models,
    sequelize
}