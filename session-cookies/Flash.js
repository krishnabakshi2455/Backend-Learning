const express = require('express')
const app = express()
const flash = require('connect-flash');
// this is a middleware

const expressSession = require('express-session')


app.use(expressSession({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}))
app.use(flash())


app.get('/', (req, res, next) => {
    res.send('Hello World')

})

app.get('/admin', (req, res, next) => {
    req.flash("error","invalid creadential")
    res.redirect('/log')
    // res.send('Hello admin')

})

app.get('/log', (req, res) => {
console.log("log working fine");
let errormesage = req.flash.error;
res.send(errormesage)
console.log(errormesage);


})

















app.get('*', (req, res) => {
    res.send("404 Not Found")
})

app.listen(5454)