import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import todo from '../routes/todo-route'
import { redf, yellow } from '../logger'

require('dotenv').config()
// import 'dotenv/config'
// console.log('** 1-env', process.env)

const app = express()
const port = process.env.PORT
// yellow('port', port)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/todo', todo)
app.get('/api', (req, res) => {
  redf('Invalid endpoint!')
  res.send('Invalid endpoint!')
})

app.listen(port, () => {
  console.log(`Events API server is listening on port ${port}`)
})

export default app