const { Clases } = require('../database/database.js')

createClases = async function(){
    await Clases.create({
        name: 'COMESTIBLES',
        departamentoId: 1
    })
    await Clases.create({
        name: 'LICUADORAS',
        departamentoId: 1
    })
    await Clases.create({
        name: 'BATIDORAS',
        departamentoId: 1
    })
    await Clases.create({
        name: 'CAFETERAS',
        departamentoId: 1
    })
    await Clases.create({
        name: 'AMPLIFICADORES CAR AUDIO',
        departamentoId: 2
    })
    await Clases.create({
        name: 'AUTO STEREOS',
        departamentoId: 2
    })
    await Clases.create({
        name: 'COLCHON',
        departamentoId: 3
    })
    await Clases.create({
        name: 'JUEGO BOX',
        departamentoId: 3
    })
    await Clases.create({
        name: 'SALAS',
        departamentoId: 4
    })
    await Clases.create({
        name: 'COMPLEMENTOS PARA LA SALA',
        departamentoId: 4
    })
    await Clases.create({
        name: 'SOFA CAMA',
        departamentoId: 4
    })
}

module.exports = createClases