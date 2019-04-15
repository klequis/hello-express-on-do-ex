import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import todo from '../routes/todo-route'
import { redf, yellow } from '../logger'

const result = require('dotenv').config()
yellow('result', result)
// import 'dotenv/config'
// console.log('** 1-env', process.env)

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/todo', todo)
app.get('/api', (req, res) => {
  redf('Invalid endpoint!')
  res.send('Invalid endpoint!')
})

const port = result.parsed.PORT

// const port = 3030
yellow('server/index.js: port', result.parsed.PORT)

app.listen(port, () => {
  console.log(`Events API server is listening on port ${port}`)
})

export default app