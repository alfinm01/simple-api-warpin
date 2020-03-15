var path = require('path')
var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  console.log('get route', req.testing);
  res.end();
})

/*
 * Open a long-live connection to display real-time message.
 */
router.ws('/', (ws, req, res) => {
  console.log('masuk')
  res.sendFile(path.resolve('views/index.html'))

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
})

module.exports = router
