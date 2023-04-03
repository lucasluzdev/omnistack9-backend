const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.Server(app)
const io = socketio(server)

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-pbwmx.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connectedUsers = {}

io.on('connection', socket => {

  /*console.log(socket.handshake.query)
  console.log('Usuario conectado', socket.id) */

  const { user_id } = socket.handshake.query

  connectedUsers[user_id] = socket.id

  //enviando dados
  /*etTimeout(() => {
      socket.emit('Oie', 'Mundo!')
  }, 4000);

  //recebendo dados
  socket.on('omni', data => {
    console.log('dados: ', data)
  })*/

})

app.use((req, res, next) => {

  req.io = io
  req.connectedUsers = connectedUsers

  return next()

})

/*
{
  origin: 'http://localhost:3333'
}
*/

app.use(cors())

app.use(express.json())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(routes)

server.listen(3333);
