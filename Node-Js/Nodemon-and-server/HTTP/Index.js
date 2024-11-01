const httpmain = require('http')

const server = httpmain.createServer(function(req,res) {
    res.end("server starting changing xyz")
})

server.listen(1212)