const Papa = require('papaparse')
const { createReadStream } = require('fs')

const fetchData = () => new Promise((resolve, reject) => {
  const file = createReadStream('./data.csv', { encoding: 'utf8' })
  Papa.parse(file, {
    download: true,
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
    complete: result => resolve(result.data),
    error: reject
  })
})

module.exports = {
  fetchData
}
