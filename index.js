const express = require('express')
const cors = require('cors')
const { fetchData } = require('./fetchData')

const port = process.env.PORT || '3030'
const app = express()

app.use(cors())

app.get('/risk-score', (_req, res) => {
  fetchData()
    .then(data => res.json(data))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
  console.log(`Running with NODE_ENV set to ${process.env.NODE_ENV}`)
})
