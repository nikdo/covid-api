const express = require('express')
const cors = require('cors')
const { fetchData } = require('./fetchData')

const app = express()
app.use(cors())
const port = 3030

app.get('/risk-score', (_req, res) => {
  fetchData()
    .then(data => res.json(data))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
