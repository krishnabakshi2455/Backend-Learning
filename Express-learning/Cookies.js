const express = require('express')
const server = express()
const cookieparser = require("cookie-parser")

server.use(cookieparser())



server.get('/', function (req, res) {
    res.send('Hello World')
})

server.get('/admin', (req, res) => {
    res.send('Hello from admin page')
})

server.get('/test', (req, res, next) => {
    res.send.krishna = true
    res.send("test done")
})





server.get('*', function (req, res) {
    res.send('404 Not Found')
    res.status(404)
})

server.listen(2456)