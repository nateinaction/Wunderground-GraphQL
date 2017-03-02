var express = require('express')
var cors = require('cors')
var graphql = require('graphql')
var graphQLHTTP = require('express-graphql')

var corsConfig = require('./cors')
var weatherSchema = require('./schema')

var app = express()

app.use('/', cors(corsConfig), graphQLHTTP({
  schema: weatherSchema,
  graphiql: true
}))

app.listen(3000)
console.log('running at localhost:3000')
