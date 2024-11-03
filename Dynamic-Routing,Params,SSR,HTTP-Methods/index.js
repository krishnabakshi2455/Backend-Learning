const express = require('express')
const server = express()


server.get('/',(req,res,next)=>{
    res.send('Hello World')
})

server.get('/admin', (req, res) => {
    res.send('Hello admin')
})

server.get('/admin/:name/:age', (req, res) => {
    // res.send('Hello user')
    res.send(`this is name ${req.params.name} this is age ${req.params.age} `)
})




server.get('*', (req, res) => {
    res.send('404 Not Found')
})


server.listen(1254)

