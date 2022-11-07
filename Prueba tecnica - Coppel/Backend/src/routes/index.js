const { Console } = require('console');
const { Router } = require('express');
const fs = require('fs')
const { Clases, Departamento, Familias, Articulo } = require('../database/database.js');

//Aqui estan toads las rutas de nuestra API

const router = Router();

//Ruta para obtener los departamentos de la base de datos
router.get('/departamentos', async ( req, res ) => {
    const clases = await Departamento.findAll()
    res.json(clases)
})

//Ruta para consultar si existe departamento y crear si no existe
router.get('/departamento/:name', async ( req, res ) => {
    const { name } = req.params
    try {
        const departamento = await Departamento.findOne({
            where: {name}
        })
        if (departamento) {
            res.status(400).json({  msg: 'Ya existe un departamento con ese nombre', data: departamento})
        }
        else {
            await Departamento.create({
                name
            })
            res.json({ msg: 'Departamento creado con exito' })
        }
    } 
    catch (error) {
        res.status(500).json({ msg: 'Ah ocurrido un error: ' + error})
    }
})

//Ruta para obtener las clases dependiendo el departamento
router.get('/departamentos/:id/clases', async ( req, res ) => {
    const { id } = req.params
    const clases = await Clases.findAll({
        where: { departamentoId: id }
    })
    res.json(clases)
})

//Ruta obtener todas las clases
router.get('/clases', async ( req, res ) => {
    const clases = await Clases.findAll()
    res.json(clases)
})

//Ruta para crear familais y asignarla a la clase
router.get('/familia/:clasId/:name', async ( req, res ) => {
    const { clasId, name } = req.params
    try {
        const familia = await Familias.findOne({where: {name}})
        if (familia) {
            res.status(400).json({  msg: 'Ya existe una familia con ese nombre', data: familia})
        }
        else {
            await Familias.create({
                name,
                claseId: clasId
            })
            res.json({ msg: 'Departamento creado con exito' })
        }
        
    } 
    catch (error) {
        res.status(500).json({ msg: 'Ah ocurrido un error: ' + error})
    }
})

//Ruta para obtener las familais dependiendo la clase
router.get('/clase/:id/familia', async ( req, res ) => {
    const { id } = req.params
    const familias = await Familias.findAll({
        where: { claseId: id }
    })
    res.json(familias)
})

//Ruta para crear clase y asignarla al departamento
router.get('/clase/:depId/:name', async ( req, res ) => {
    const { depId, name } = req.params
    try {
        const clase = await Clases.findOne({where: {name}})
        if (clase) {
            res.status(400).json({  msg: 'Ya existe una clase con ese nombre', data: clase})
        }
        else {
            await Clases.create({
                name,
                departamentoId: depId
            })
            res.json({ msg: 'Departamento creado con exito' })
        }
        
    } 
    catch (error) {
        res.status(500).json({ msg: 'Ah ocurrido un error: ' + error})
    }
})

//Ruta para obtener un articulo creado
router.get('/created/:sku', async ( req, res ) => {
    const { sku } = req.params
    try {
        const resp = await Articulo.findByPk(sku)
        res.json(resp)
    } 
    catch (error) {
        res.json({msg: 'SKU no encontrado'})
    }
})

//Ruta para eliminar un articulo
router.delete('/created/:sku', async ( req, res ) => {

    const { sku } = req.params

    try {
        await Articulo.destroy({
            where: {
                sku
            }
        })
        res.json({ msg: 'Articulo borrado exitosamente' })
    } 
    catch (error) {
        res.status(404).json({msg: 'Producto no encontrado'})
    }
})

//Ruta para crear un articulo
router.post('/create', async ( req, res ) => {
    const { sku, name, marca,  modelo, departamento, clase, familia, stock, cantidad, fechaDeBaja } = req.body
    // Number.parseInt(id)
    // Number.parseInt(departamento)
    // Number.parseInt(clase)
    // Number.parseInt(familia)
    // Number.parseInt(stock)
    // Number.parseInt(cantidad)

    try {
        const articulo = await Articulo.create({
            sku,
            name,
            marca,
            modelo,
            departamento,
            clase,
            familia,
            stock,
            cantidad,
            fechaDeBaja,
        })

        fs.writeFile(`../ArticulosCreados/SKU - ${sku}.json`, JSON.stringify(articulo.dataValues), () => {
            console.log('Archivo creado')
        })
       
        res.status(201).json({ msg: 'Articulo creado exitosamente' })
    } 
    catch (error) {
        res.status(400).json(error)
    }
})

//Ruta para modificar un articulo
router.put('/update/:sku', async ( req, res ) => {
    
    const { sku } = req.params
    const { name, marca, modelo, departamento, clase, familia, stock, cantidad, descontinuado } = req.body

    if (!name || !marca || !modelo || !departamento || !clase || !familia || !stock || !cantidad || sku === '1') {
        return res.status(400).json({msg: 'No se pudo modificar porque faltan valores requeridos'})
    }  
    try {

        if (descontinuado) {
            const articulo = await Articulo.findByPk(sku)
            articulo.descontinuado = 1
            articulo.fechaDeBaja = new Date()
            articulo.name = name
            articulo.marca = marca
            articulo.modelo = modelo
            articulo.departamento = departamento
            articulo.clase = clase
            articulo.familia = familia
            articulo.stock = stock
            articulo.cantidad = cantidad
            await articulo.save()
            
            fs.writeFile(`../ArticulosModificados/SKU - ${sku}.json`, JSON.stringify(articulo.dataValues), () => {
                console.log('Archivo creado')
            })

            res.json({ msg: 'Articulo actualizado' })
        }
        else {
            const articulo = await Articulo.findByPk(sku)
            articulo.name = name
            articulo.marca = marca
            articulo.modelo = modelo
            articulo.departamento = departamento
            articulo.clase = clase
            articulo.familia = familia
            articulo.stock = stock
            articulo.cantidad = cantidad
            articulo.descontinuado = 0
            await articulo.save()

            fs.writeFile(`../ArticulosModificados/SKU - ${sku}.json`, JSON.stringify(articulo.dataValues), () => {
                console.log('Archivo creado')
            })

            res.json({ msg: 'Articulo actualizado' })
        }
    
    } 
    catch (error) {
        res.json(error)
    }
})

module.exports = router;