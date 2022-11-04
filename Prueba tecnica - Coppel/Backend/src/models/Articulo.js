const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Articulo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true
        },
        sku: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            validate: {
                isInt: {
                    args: true,
                    msg: 'El SKU solo pueden ser numeros'
                },
                min: {
                    args: 1,
                    msg: 'El SKU no puede ser un numero negativo'
                },
                len: {
                    args: [1,6],
                    msg: 'El SKU solo puede tener maximo 6 digitos'
                }
                
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               
                isUppercase: {
                    args: true,
                    msg: 'Tiene que ser mayusuclas'
                },
                isAlpha: {
                    args: true,
                    msg: 'Solo pueden ser letras'
                },
                len: {
                    args: [2, 15],
                    msg: 'Solo puede tener minimo 2 letras y maximo 15'
                }
            }
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 15],
                    msg: 'Solo puede tener minimo 2 letras y maximo 15'
                },  
            }
            
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 20],
                    msg: 'Solo puede tener minimo 2 letras y maximo 20'
                },
                
            },
            unique: true
        },
        departamento: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    args: true,
                    msg: 'Tiene que ser un numero'
                },
                min: {
                    args: 1,
                    msg: 'No puede ser un numero negativo'
                },
                len: {
                    args: [1,1],
                    msg: 'Solo puede tener un digito'
                }
            }
        },
        clase: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    args: true,
                    msg: 'Tiene que ser un numero'
                },
                min: {
                    args: 1,
                    msg: 'No puede ser un numero negativo'
                },
                len: {
                    args: [1,2],
                    msg: 'Solo puede tener maximo 2 digitos'
                }
            }
        },
        familia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    args: true,
                    msg: 'Tiene que ser un numero'
                },
                min: {
                    args: 1,
                    msg: 'No puede ser un numero negativo'
                },
                len: {
                    args: [1,3],
                    msg: 'Solo puede tener maximo 3 digitos'
                }
            }
        },
        fechaDeAlta: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    args: true,
                    msg: 'Solo puede ser numeros'
                },
                len: {
                    args: [1, 9],
                    msg: 'El stock no puede tener mas de 9 cifras'
                }
            }
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    args: true,
                    msg: 'Solo puede ser numeros'
                },
                len: {
                    args: [1, 9],
                    msg: 'La cantidad no puede tener mas de 9 cifras'
                }
            }
        },
        descontinuado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    args: true,
                    msg: 'Solo puede ser numeros' 
                },
                len: {
                    args: [1, 1],
                    msg: 'Solo puede ser una cifra'
                },
                min: 0,
                max: 1
            },
            defaultValue: 0
        },
        fechaDeBaja: {
            type: DataTypes.DATEONLY,
            defaultValue: 1900-01-01
        }
    },
    {
        timestamps: false,
        createdAt: false,
    })
}