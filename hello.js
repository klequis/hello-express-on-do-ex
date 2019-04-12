// const express = require('express')
import express from 'express'
// const bodyParser = require('body-parser')
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('also try /test')
})

app.get('/test', (req, res) => {
  res.send('test works')
})

app.listen(port, () => {
  console.log(`Events API server is listening on port ${port}`)
})


