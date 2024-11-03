const express = require('express')
const server = express()
const ejs = require('ejs')
const json = require('express-json')


server.use(express.urlencoded({extended:true}))
server.set('view engine','ejs')




server.get('/', (req, res, next) => {
    res.send('Hello World')
})

server.get('/ejs1', (req, res) => {
    res.render('Index')
    let filename = req.query.filename
    let filedata = req.query.filedata
    console.log(`this is filename ${filename} this is filedata ${filedata}`);
    
    
})






server.get('*', (req, res) => {
    res.send('404 Not Found')
})


server.listen(1254)


