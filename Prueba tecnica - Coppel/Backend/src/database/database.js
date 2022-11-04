const { Sequelize } = require('sequelize')
const modelDepartamento = require('../models/Departamento.js')
const modelClases = require('../models/Clases.js')

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/category', {
    logging: false
})

modelDepartamento(sequelize)
modelClases(sequelize)

const { Departamento, Clases } = sequelize.models

//crear relaciones
Departamento.hasMany(Clases, {
    foreignKey: 'departamentoId',
    sourceKey: 'id',
})
Clases.belongsTo(Departamento, {
    foreignKey: 'departamentoId',
    targetId: 'id',
})


module.exports = {
    ...sequelize.models,
    sequelize
}