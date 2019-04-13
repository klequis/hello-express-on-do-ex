"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000;
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.send('also try /test');
});
app.get('/test', function (req, res) {
  res.send('test works');
});
app.listen(port, function () {
  console.log("Events API server is listening on port ".concat(port));
}); // MongoDB test
// const MongoClient = mongodb.MongoClient
// const mongoUrl = 'mongodb+srv://todo-db-admin:D92dARWONO0t16uF@todo-cluster0-ilc7v.mongodb.net/test?retryWrites=true'
// const dbName = 'todo-test'
// let client
// async function connectDB() {
//   if (!client) {
//     client = await MongoClient.connect(mongoUrl)
//   }
//   return {
//       db: client.db(dbName),
//       client: client
//   }
// }
// async function testConnection() {
//   try {
//     const { db, client } = await connectDB()
//     const ret = await db.collection('todos').find({}).toArray()
//     console.log('SUCCESS', ret)
//   }
//   catch (e) {
//     console.log('ERROR: dbFunctions.find', e.message)
//   }
// }
// testConnection()