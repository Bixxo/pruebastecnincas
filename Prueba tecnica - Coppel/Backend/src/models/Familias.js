const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Familias', {
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