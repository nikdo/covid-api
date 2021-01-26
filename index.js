const express = require('express')
const { fetchData } = require('./fetchData')

const app = express()
const port = 3000

app.get('/risk-score', (_req, res) => {
  fetchData()
    .then(data => res.json(data))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
