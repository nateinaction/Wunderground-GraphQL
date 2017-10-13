var express = require('express')
var cors = require('cors')
var graphql = require('graphql')
var graphQLHTTP = require('express-graphql')

var corsConfig = require('./cors')
var weatherSchema = require('./schema')

var app = express()
var port = 8080

app.use('/', cors(corsConfig), graphQLHTTP({
  schema: weatherSchema,
  graphiql: true
}))

app.listen(port, () => {
  console.log('Running at localhost:' + port)
})

module.exports = app
