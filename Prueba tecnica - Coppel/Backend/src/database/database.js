const { Sequelize } = require('sequelize')
const modelDepartamento = require('../models/Departamento.js')
const modelClases = require('../models/Clases.js')
const modelFamilias = require('../models/Familias.js')
const modelArticulo = require('../models/Articulo.js')

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/category', {
    logging: false
})

modelDepartamento(sequelize)
modelClases(sequelize)
modelFamilias(sequelize)
modelArticulo(sequelize)

const { Departamento, Clases, Familias } = sequelize.models

//crear relaciones
Departamento.hasMany(Clases, {
    foreignKey: 'departamentoId',
    sourceKey: 'id',
})
Clases.belongsTo(Departamento, {
    foreignKey: 'departamentoId',
    targetId: 'id',
})

Clases.hasMany(Familias, {
    foreignKey: 'claseId',
    sourceKey: 'id',
})
Familias.belongsTo(Clases, {
    foreignKey: 'claseId',
    targetId: 'id',
})



module.exports = {
    ...sequelize.models,
    sequelize
}