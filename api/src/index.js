require('dotenv').config()

const express = require('express')
const blogController = require('./controller/blogController')

const app = express()
const port = process.env.API_PORT;

app.use('/api/blog', blogController);

app.listen(port, () => {
  console.log(`csiber.at notion gateway listening at http://localhost:${port}`)
})