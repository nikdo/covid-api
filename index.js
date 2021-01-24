const express = require('express')
const app = express()
const port = 3000

const fetchData = () => new Promise((resolve => resolve({ foo: 'bar' })))

app.get('/risk-score', (_req, res) => {
  fetchData().then(data => res.json(data))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
