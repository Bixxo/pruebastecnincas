const { Router } = require('express');
const { Clases, Departamento } = require('../database/database.js')


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


module.exports = router;