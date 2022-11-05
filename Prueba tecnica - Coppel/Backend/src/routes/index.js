const { Router } = require('express');
const { Clases, Departamento, Familias, Articulo } = require('../database/database.js');

const router = Router();

router.get('/departamentos', async ( req, res ) => {
    const clases = await Departamento.findAll()
    res.json(clases)
})
router.get('/departamentos/:id/clases', async ( req, res ) => {
    const { id } = req.params
    const clases = await Clases.findAll({
        where: { departamentoId: id }
    })
    res.json(clases)
})

router.get('/clase/:id/familia', async ( req, res ) => {
    const { id } = req.params
    const familias = await Familias.findAll({
        where: { claseId: id }
    })
    res.json(familias)
})

router.get('/created/:sku', async ( req, res ) => {
    const { sku } = req.params
    // Number.parseInt(sku)
    try {
        const resp = await Articulo.findByPk(sku)
        res.json(resp)
    } 
    catch (error) {
        res.json({msg: 'SKU no encontrado'})
    }
})

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
        res.status(201).json({ msg: 'Articulo creado exitosamente' })
    } 
    catch (error) {
        res.status(400).json(error)
    }
})


module.exports = router;