const express = require('express')
const server = express()


server.get('/',function(req,res){
    res.send('Hello World')
})

server.get('/admin',(req,res)=> {
    res.send('Hello from admin page')
})









server.get('*',function(req,res){
    res.send('404 Not Found')
    res.status(404)
})

server.listen(2455)