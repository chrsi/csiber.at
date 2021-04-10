require('dotenv').config()

const express = require('express')
const cors = require('cors')
const blogController = require('./controller/blogController')

const app = express()
const port = process.env.PORT;

var whitelist = ['http://localhost:3000', 'https://csiber.at']
app.use(cors({
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}))

app.use('/api/blog', blogController);

app.listen(port, () => {
  console.log(`csiber.at notion gateway listening at http://localhost:${port}`)
})