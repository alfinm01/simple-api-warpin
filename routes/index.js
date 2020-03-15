var express = require('express')
var router = express.Router()

/* GET API status (check if live or not). */
router.get('/', (req, res) => {
  res.send('You are connected')
})

module.exports = router
