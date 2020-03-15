var createError = require('http-errors')
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var path = require('path')

var indexRouter = require('./routes/index')
var messageRouter = require('./routes/message')

var app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/message', messageRouter)

// Web socket configuration
const server = app.use('/', (req, res) => { 
		res.sendFile(path.resolve('views/index.html')) 
	})
	.listen(process.env.PORT || '9000')
const { Server } = require('ws')
const wss = new Server({ server }, 'echo-protocol')

// Real-time connection function
wss.on('connection', (ws) => {
  console.log('Client connected')
  ws.on('close', () => console.log('Client disconnected'))
  let counter = 0
  ws.on('message', (message) => {
    console.log('received: ', message)
    counter++
    wss.clients.forEach((client) => {
      client.send('Message ' + counter + ': ' + message + '\nReceived on ' + new Date().toTimeString())
    })
  })
})

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // Send the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
