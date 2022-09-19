const express = require('express')
const { port } = require('./config')    //server config
const apiRouter = require('./routes/api')  //routes

const app = express()

//db
require('./db/mongoose')

//routes
app.use('/', apiRouter)

//server
app.listen(port, function () {
    console.log(`Server is running... http://localhost:${port}`)
})