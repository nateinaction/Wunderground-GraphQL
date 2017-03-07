var url = require('url')

var allowedOrigins = ['nategay.me', 'localhost']

var corsConfig = (req, callback) => {
  var origin = req.header('Origin') || null
  var hostname = (origin) ? url.parse(origin).hostname : null
  var config = (allowedOrigins.indexOf(hostname) !== -1) ? { origin: true } : { origin: false }
  config.credentials = true
  callback(null, config)
}

module.exports = corsConfig
