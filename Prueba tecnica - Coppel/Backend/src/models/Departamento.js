const { DataTypes } = require('sequelize')

//Creamos el modelo para crear departamenotos

module.exports = (sequelize) => {
    sequelize.define('Departamento', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isUppercase: {
                    args: true,
                    msg: 'Tiene que ser letras mayusuclas'
                }   
            }
        }
    },
    {
        timestamps: false,
        createdAt: false,
    })
}