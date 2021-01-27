const { pipeline } = require('stream')
const got = require('got')
const stripBomStream = require('strip-bom-stream')
const Papa = require('papaparse')

const dataFileUrl = 'https://share.uzis.cz/s/BRfppYFpNTddAy4/download?path=%2F&files=pes_CR_verze2.csv'

const fetchData = () => new Promise((resolve, reject) => {
  const data = []
  pipeline(
    got.stream(dataFileUrl),
    stripBomStream(),
    Papa.parse(Papa.NODE_STREAM_INPUT, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      encoding: 'utf8'
    }),
    err => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    }
  ).on('data', item => data.push(item))
})

module.exports = {
  fetchData
}
