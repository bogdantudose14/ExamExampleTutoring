const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use('/', express.static('public'))

app.get('/cars', (req, res) => {
  res.status(200).json([
    {
      name: 'a',
      color: 'red'
    },
    {
      name: 'b',
      color: 'blue'
    }
  ])
})

module.exports = app
