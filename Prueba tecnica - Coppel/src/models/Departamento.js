const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Departamento', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
}