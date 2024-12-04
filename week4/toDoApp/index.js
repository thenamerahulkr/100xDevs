const express = require('express')
const app = express()


// route handlers
app.get('/', function (req, res) {
  res.send('Hello World rahul')
})


//listening on this port
app.listen(3000);   