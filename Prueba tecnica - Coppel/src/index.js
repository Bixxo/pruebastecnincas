const server = require('./app')
const sequelize = require('./database/database')

const port = 3000


sequelize.sync( { force: true } ).then(() => {
    server.listen(port, () => console.log(`server start on port: ${port}`))
})