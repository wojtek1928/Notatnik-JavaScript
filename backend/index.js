const bodyParser = require('body-parser')
const express = require('express')
const { port } = require('./app/config')    //server config
const apiRouter = require('./app/routes/api')  //routes
const cors = require('cors')
const app = express()

//db
require('./app/db/mongoose')

//parsers
app.use(bodyParser.json())  //Constent-type: application/json

//fix cors
app.use(cors());

//routes
app.use('/api/', apiRouter)

//server
app.listen(port, function () {
    console.log(`Server is running... http://localhost:${port}`)
})