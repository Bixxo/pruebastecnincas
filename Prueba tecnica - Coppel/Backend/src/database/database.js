const { Sequelize } = require('sequelize')
const modelDepartamento = require('../models/Departamento.js')
const modelClases = require('../models/Clases.js')
const modelFamilias = require('../models/Familias.js')
const modelArticulo = require('../models/Articulo.js')
const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;

//Conexion con la base de datos

const sequelize = new Sequelize(`postgres://postgres:root@localhost:5432/category`, {
    logging: false
})

//Instanciamos los modelos que tenemos para crear lo que necesitamos
modelDepartamento(sequelize)
modelClases(sequelize)
modelFamilias(sequelize)
modelArticulo(sequelize)

const { Departamento, Clases, Familias, Articulo } = sequelize.models

//crear relaciones entre las tablas
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

Departamento.hasMany(Articulo, {
    foreignKey: 'departamento',
    sourceKey: 'id',
})
Articulo.belongsTo(Departamento, {
    foreignKey: 'departamento',
    targetKey: 'id',
})


Clases.hasMany(Articulo, {
    foreignKey: 'clase',
    sourceKey: 'id',
})
Articulo.belongsTo(Clases, {
    foreignKey: 'clase',
    targetKey: 'id',
})


Familias.hasMany(Articulo, {
    foreignKey: 'familia',
    sourceKey: 'id',
})
Articulo.belongsTo(Familias, {
    foreignKey: 'familia',
    targetKey: 'id',
})





module.exports = {
    ...sequelize.models,
    sequelize
}