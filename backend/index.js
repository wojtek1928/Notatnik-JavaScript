const bodyParser = require('body-parser')
const express = require('express')
const { port } = require('./config')    //server config
const apiRouter = require('./routes/api')  //routes

const app = express()

//db
require('./db/mongoose')
//parsers
//Constent-type: application/json
app.use(bodyParser.json())

//routes
app.use('/api/', apiRouter)

//server
app.listen(port, function () {
    console.log(`Server is running... http://localhost:${port}`)
})