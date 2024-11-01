const express = require('express')
const server = express()

server.use((req, res, next) => {
    console.log("inside of middleware");
    next()
})
server.get('/', function (req, res) {
    res.send('Hello World')
})











server.get('*', function (req, res) {
    res.send('404 Not Found')
    res.status(404)
})

server.listen(2455)