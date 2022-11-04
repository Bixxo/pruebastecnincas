const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const server = require('./app')
const { sequelize } = require('./database/database')
const routes = require('./routes/index.js')
const createDepartamentos = require('./CreateInputs/createDepartamenots.js')
const createClases = require('./CreateInputs/createClases.js')
const createFamilias = require('./CreateInputs/createFamilias.js')
const { Articulo } = require('./database/database.js')




const port = 3001


//middelwares
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.use('/', routes);


sequelize.sync( { force: true } ).then(() => {
    server.listen(port, () => console.log(`server start on port: ${port}`))
    
})
.then(() => createDepartamentos())
.then(() => createClases())
.then(() => createFamilias())
.then(() => {
    Articulo.create({
        sku: 1,
        name: 'NA',
        marca: 'NA',
        modelo: 'NA',
        departamento: 1,
        clase: 1,
        familia: 1,
        stock: 1,
        cantidad: 1 
    })
})