const { Familias } = require('../database/database')

//Creamos los datos necesarios poder trabajar con la base de datos.

createFamilias = async function(){
    await Familias.create({
        name: 'LICUADORAS',
        claseId: 2
    })
    await Familias.create({
        name: 'EXCLUSIVO COPPEL',
        claseId: 2
    })
    await Familias.create({
        name: 'BATIDORA MANUAL',
        claseId: 3
    })
    await Familias.create({
        name: 'PROCESADOR',
        claseId: 3
    })
    await Familias.create({
        name: 'BATIDORA DE PEDESTAL',
        claseId: 3
    })
    await Familias.create({
        name: 'MULTIPRACTICOS',
        claseId: 3
    })
    await Familias.create({
        name: 'EXCLUSIVOS COPPEL',
        claseId: 3
    })
    await Familias.create({
        name: 'CAFETERAS',
        claseId: 4
    })
    await Familias.create({
        name: 'PERCOLADORAS',
        claseId: 4
    })
    await Familias.create({
        name: 'AMPLIFICADORES',
        claseId: 5
    })
    await Familias.create({
        name: 'KIT DE INSTALACION',
        claseId: 5
    })
    await Familias.create({
        name: 'AMPLIFICADORES COPPEL',
        claseId: 5
    })
    await Familias.create({
        name: 'AUTOSTEREO CD / BOO ',
        claseId: 6
    })
    await Familias.create({
        name: 'ACCESORIOS CAR AUDIO',
        claseId: 6
    })
    await Familias.create({
        name: 'AMPLIFICADOR',
        claseId: 6
    })
    await Familias.create({
        name: 'ALARMA AUTO/CASA/OFICINA',
        claseId: 6
    })
    await Familias.create({
        name: 'SIN MECANISMO',
        claseId: 6
    })
    await Familias.create({
        name: 'CON CD',
        claseId: 6
    })
    await Familias.create({
        name: 'MULTIMEDIA',
        claseId: 6
    })
    await Familias.create({
        name: 'PAQUETE SIN MECANISMO',
        claseId: 6
    })
    await Familias.create({
        name: 'PAQUETE CON CD',
        claseId: 6
    })
    await Familias.create({
        name: 'PILLOW TOP KS',
        claseId: 7
    })
    await Familias.create({
        name: 'PILLOW TOP DOBLE KS',
        claseId: 7
    })
    await Familias.create({
        name: 'HULE ESPUMA KS',
        claseId: 7
    })
    await Familias.create({
        name: 'ESTANDAR INDIVIDUAL',
        claseId: 8
    })
    await Familias.create({
        name: 'PILLOW TOP INDIVIDUAL',
        claseId: 8
    })
    await Familias.create({
        name: 'PILLOW TOP DOBLE INDIVIDUAL',
        claseId: 8
    })
    await Familias.create({
        name: 'ESQUINERAS SUPERIORES',
        claseId: 9
    })
    await Familias.create({
        name: 'TIPO L SECCIONAL',
        claseId: 9
    })
    await Familias.create({
        name: 'SILLON OCACIONAL',
        claseId: 10
    })
    await Familias.create({
        name: 'PUFF',
        claseId: 10
    })
    await Familias.create({
        name: 'BAUL',
        claseId: 10
    })
    await Familias.create({
        name: 'TABURETE',
        claseId: 10
    })
    await Familias.create({
        name: 'SOFA CAMA TAPIZADO',
        claseId: 11
    })
    await Familias.create({
        name: 'SOFA CAMA CLASICO',
        claseId: 11
    })
    await Familias.create({
        name: 'ESTUDIO',
        claseId: 11
    })
    
}

module.exports = createFamilias