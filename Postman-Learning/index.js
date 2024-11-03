const express = require("express")
const server = express()




server.get('/', (req, res, next) => {
    try {
        ress.send('Hello World')
    } catch (err) {
        next(err)
    }
})

server.post('/post', (req, res, next) => {
    res.send('Hello from post')
})

server.put('/put', (req, res) => {
    res.send('Hello put incoming')
})

server.patch('/patch', (req, res) => {
    res.send('Hello patch incoming')
})


server.delete('/delete', (req, res) => {
    res.send('Hello delete incoming')
})










server.get("*", (res, req) => {
    res.send("not found")
})
server.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

server.listen(1254)