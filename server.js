const  express = require('express')
const  cors    = require('cors')
const  path    = require('path')

const app = express();
const server = require('http').createServer(app)
const socket = require('socket.io')
const io = socket(server)


app.use(cors())
app.use(express.static(__dirname))
app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

io.on('connection',  function(connection){
    console.log(`A new socket connection: ${connection.id}`)
    connection.on('paths', paths => {
        console.log(paths)
        connection.broadcast.emit('paths', paths)
    })
})

const port = 3000
server.listen(port)



