const express = require('express')
const Expresssession = require("express-session")
const server = express()



server.use(Expresssession({
    secret: "somebullshit",
    resave: false,
    saveUninitialized: true,

}))


server.get('/', function (req, res) {
    res.send('Hello World')
})

server.use((res, req, next) => {
    // res.send("i am done")
    console.log("log from server use function");
    
    // res.session()
    next()
})

server.get('/admin', (req, res) => {
    res.send('Hello from admin page')
})

server.get('/test',(req,res,next)=>{
    res.send.krishna=true
    res.send("test done")
})





server.get('*', function (req, res) {
    res.send('404 Not Found')
    res.status(404)
})

server.listen(2456)