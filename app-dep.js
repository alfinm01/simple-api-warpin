var createError = require('http-errors')
var path = require('path')
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var expressWs = require('express-ws')(express())
var app = expressWs.app;

var indexRouter = require('./routes/index')
var messageRouter = require('./routes/message')
var websocketRouter = require('./routes/websocket')

app.use(express.static('public'));

var aWss = expressWs.getWss('/');

app.ws('/', function(ws, req) {
  console.log('Socket Connected');

  ws.onmessage = function(msg) {
    console.log(msg.data);
    aWss.clients.forEach(function (client) {
      client.send(msg.data);
    });
  };
});


//app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/*// get the WebsocketServer instance with getWss()
// https://github.com/HenningM/express-ws/blob/5b5cf93bb378a0e6dbe6ab33313bb442b0c25868/index.js#L72-L74
expressWs.getWss().on('connection', function(ws) {
  console.log('connection open');
});

// ... express middleware

// ... websocket middle ware
app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
  });
});*/

/*app.ws('/', (ws, req, res) => {
  console.log('masuk')
  //res.sendFile(path.resolve('views/index.html')path.join(__dirname, 'views/index.html'))

  console.log('socket', req.testing)

  ws.on('close', () => console.log('Client disconnected'))

  var counter = 0
  ws.on('message', (message) => {
    console.log('received: ', message)
    counter++
    ws.send(message)
  })

  ws.send(counter + ' message received!')

  setInterval(() => {
    ws.send(new Date().toTimeString())
  }, 1000)
})*/
app.use('/check', indexRouter)
app.use('/message', messageRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
