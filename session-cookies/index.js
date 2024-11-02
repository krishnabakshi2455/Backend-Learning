const express = require('express')
const app = express()
const expressSession = require('express-session')

app.use(expressSession({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}))

app.get('/admin', (req, res) => {
    res.send('Hello admin')
})

app.get('/user', (req, res) => {
    expressSession.Session.krishna = "bakshi"
    res.send('Hello user')
})

app.get('/log', (req, res) => {
    console.log(expressSession.Session.krishna);
    
    res.send(`this is session value ${expressSession.Session.krishna}`)
})

app.get('/', (req, res,next)=> {
    res.send('Hello World')
    
})



















app.get('*',(req,res)=>{
    res.send("404 Not Found")
})

app.listen(2455)