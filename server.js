var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

// https://expressjs.com/en/api.html
// in express, these are called Middleware
// https://expressjs.com/en/guide/using-middleware.html

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


var messages = [
    {name: 'Tony Stark', message: 'Hi'},
    {name: 'Jenn Lee', message: 'Hola'}
]
 // ********** USE THIS DOCUMENT FOR TESTING BACK END *********
// accept get requests to this route
// req = request; res = response
// contains a callback to send the message
// navigate to test http://localhost:3000/messages
app.get('/messages', (req, res) =>{
    res.send(messages)
})

app.post('/messages', (req, res) =>{
    messages.push(req.body)
    console.log(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})








