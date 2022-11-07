const { Departamento } = require('../database/database.js')

//Creamos los datos necesarios poder trabajar con la base de datos.

createDepartamentos = async function(){
    await Departamento.create({
        name: 'DOMESTICOS'
    })
    await Departamento.create({
        name: 'ELECTRONICA'
    })
    await Departamento.create({
        name: 'MUEBLE SUELTO'
    })
    await Departamento.create({
        name: 'SALAS, RECAMARAS, COMEDORES'
    })
    
}

module.exports = createDepartamentos