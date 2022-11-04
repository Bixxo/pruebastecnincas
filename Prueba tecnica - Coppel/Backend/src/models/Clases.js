const { DataTypes } = require('sequelize')
const Departamento = require('./Departamento')

module.exports = (sequelize) => {
    sequelize.define('Clases', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        timestamps: false,
        createdAt: false,
    })
}