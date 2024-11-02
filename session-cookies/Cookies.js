const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())


app.get('/', (req, res, next) => {
    res.cookie("name","krishna")
    res.send('Hello World')

})

app.get('/log', (req, res, next) => {
    res.send(`this is cookies ${req.cookies.name}`)
    

})

















app.get('*', (req, res) => {
    res.send("404 Not Found")
})

app.listen(5524)