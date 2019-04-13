import express from 'express'
import bodyParser from 'body-parser'
import mongodb from 'mongodb'

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

// MongoDB test

const MongoClient = mongodb.MongoClient

const mongoUrl = 'mongodb+srv://todo-db-admin:D92dARWONO0t16uF@todo-cluster0-ilc7v.mongodb.net/test?retryWrites=true'
const dbName = 'todo-dev'
let client

async function connectDB() {
  if (!client) {
    client = await MongoClient.connect(mongoUrl)
  }
  return {
      db: client.db(dbName),
      client: client
  }
}

async function testConnection() {
  try {
    const { db, client } = await connectDB()
    const ret = await db.collection('todos').find({}).toArray()
    console.log('SUCCESS', ret)
  }
  catch (e) {
    console.log('ERROR: dbFunctions.find', e.message)
  }
}

testConnection()