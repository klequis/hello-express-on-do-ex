"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongodb = _interopRequireDefault(require("mongodb"));

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

var MongoClient = _mongodb["default"].MongoClient;
var mongoUrl = 'mongodb+srv://todo-db-admin:D92dARWONO0t16uF@todo-cluster0-ilc7v.mongodb.net/test?retryWrites=true';
var dbName = 'todo-dev';
var client;

function connectDB() {
  return _connectDB.apply(this, arguments);
}

function _connectDB() {
  _connectDB = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (client) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return MongoClient.connect(mongoUrl);

          case 3:
            client = _context.sent;

          case 4:
            return _context.abrupt("return", {
              db: client.db(dbName),
              client: client
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _connectDB.apply(this, arguments);
}

function testConnection() {
  return _testConnection.apply(this, arguments);
}

function _testConnection() {
  _testConnection = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var _ref, db, _client, ret;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return connectDB();

          case 3:
            _ref = _context2.sent;
            db = _ref.db;
            _client = _ref.client;
            _context2.next = 8;
            return db.collection('todos').find({}).toArray();

          case 8:
            ret = _context2.sent;
            console.log('SUCCESS', ret);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log('ERROR: dbFunctions.find', _context2.t0.message);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _testConnection.apply(this, arguments);
}

testConnection();