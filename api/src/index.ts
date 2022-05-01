require('dotenv').config()

import express from 'express'
const app = express()

import cors from 'cors'

const blogController = require('./controller/blogController')
const healthController = require('./controller/healthController')

const port = process.env.PORT;

var whitelist = ['http://localhost:3000', 'https://csiber.at']
app.use(cors({
  origin: function(origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(null, true)
    }
  }
}))

app.use('/api/blog', blogController);
app.use('/api/health', healthController);

app.listen(port, () => {
  console.log(`csiber.at notion gateway listening at http://localhost:${port}`)
})
