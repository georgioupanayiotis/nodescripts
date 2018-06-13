// app.js
const express = require('express')
const app = express()

app.get('/iampublic', function (req, res) {
  res.send('Hello World now visible public to the world :)')
})

app.listen(8181, function () {
  console.log('Example app listening on port 8181!')
})