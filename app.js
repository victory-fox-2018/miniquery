const express = require('express')
const cors = require('cors')
const app = express()

// app.set('view engine','ejs')

app.use(cors())
 
app.get('/', function (req, res, next) {
  
  res.status(200).json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})