var express = require('express')
var router = express.Router()
var pool = require('../db/db_config')

/* GET all previously sent messages. */
router.get('/get-all-messages', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM Message;')
    const results = { results: (result) ? result.rows : null }
    res.send(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.send('Error: ' + err)
  }
})

/* POST new message. */
router.post('/send-message', async (req, res) => {
  try {
    if (!req.body.message) {
      throw new Error('No message defined')
    }
    const client = await pool.connect()
    const result = await client.query('INSERT INTO Price (message, timestamp) VALUES (' + req.body.message + ', \', NOW()) RETURNING *;')
    const results = { results: (result) ? result.rows : null }
    res.send(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.send('Error: ' + err)
  }
})

/* GET API status (check if live or not). */
router.get('/', (req, res) => {
  res.send('You are connected')
})

module.exports = router
