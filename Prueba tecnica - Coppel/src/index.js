const morgan = require('morgan')
const server = require('./app')
const sequelize = require('./database/database')
const routes = require('./routes/index.js')

const port = 3000


//middelwares
server.use(morgan('dev'))
server.use('/', routes);


sequelize.sync( { force: true } ).then(() => {
    server.listen(port, () => console.log(`server start on port: ${port}`))
})