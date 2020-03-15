var express = require('express')
var router = express.Router()
var pool = require('../db/db_config')

/* GET index page. */
router.get('/', function (req, res, next) {
  res.send('You are connected')
})

module.exports = router
