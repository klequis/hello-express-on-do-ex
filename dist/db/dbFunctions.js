"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = close;
exports.insertMany = exports.insertOne = exports.findOneAndUpdate = exports.findOneAndDelete = exports.findById = exports.search = exports.find = exports.dropCollection = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = require("./config");

var _helpers = require("./helpers");

var _logger = require("../logger");

var _mongodb = _interopRequireDefault(require("mongodb"));

var MongoClient = _mongodb["default"].MongoClient;
var client;

function close() {
  return _close.apply(this, arguments);
}

function _close() {
  _close = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9() {
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (client) client.close();
            client = undefined;

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _close.apply(this, arguments);
}

function connectDB() {
  return _connectDB.apply(this, arguments);
}

function _connectDB() {
  _connectDB = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10() {
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (client) {
              _context10.next = 4;
              break;
            }

            _context10.next = 3;
            return MongoClient.connect(_config.mongoUrl, {
              useNewUrlParser: true
            });

          case 3:
            client = _context10.sent;

          case 4:
            return _context10.abrupt("return", {
              db: client.db(_config.dbName),
              client: client
            });

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _connectDB.apply(this, arguments);
}

var returnError = function returnError(e) {
  return {
    data: [],
    meta: {
      error: e.message
    }
  };
};

var dropCollection =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(collection) {
    var _ref2, db, _client, ret;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return connectDB();

          case 3:
            _ref2 = _context.sent;
            db = _ref2.db;
            _client = _ref2.client;
            _context.next = 8;
            return db.collection(collection).drop();

          case 8:
            ret = _context.sent;
            return _context.abrupt("return", ret);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);

            if (!(_context.t0.message = 'ns not found')) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", true);

          case 18:
            (0, _logger.redf)('ERROR: dbFunctions.dropCollection', _context.t0.message);
            return _context.abrupt("return", returnError(_context.t0));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function dropCollection(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.dropCollection = dropCollection;

var find =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(collection) {
    var query,
        project,
        _ref4,
        db,
        _client2,
        ret,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            project = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
            _context2.prev = 2;
            _context2.next = 5;
            return connectDB();

          case 5:
            _ref4 = _context2.sent;
            db = _ref4.db;
            _client2 = _ref4.client;
            _context2.next = 10;
            return db.collection(collection).find(query).project(project).toArray();

          case 10:
            ret = _context2.sent;
            return _context2.abrupt("return", {
              data: ret,
              meta: {}
            });

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](2);
            (0, _logger.redf)('ERROR: dbFunctions.find', _context2.t0.message);
            return _context2.abrupt("return", returnError(_context2.t0));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 14]]);
  }));

  return function find(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.find = find;

var search =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(collection, searchTerm, project) {
    var _ref6, db, _client3, ret;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return connectDB();

          case 3:
            _ref6 = _context3.sent;
            db = _ref6.db;
            _client3 = _ref6.client;
            _context3.next = 8;
            return db.collection(collection).find({
              $text: {
                $search: searchTerm
              }
            }).project(project).sort({
              score: {
                $meta: 'textScore'
              }
            }).toArray();

          case 8:
            ret = _context3.sent;
            return _context3.abrupt("return", {
              data: ret,
              meta: {}
            });

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            (0, _logger.redf)('ERROR: dbFunctions.search', _context3.t0.message);
            return _context3.abrupt("return", returnError(_context3.t0));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function search(_x3, _x4, _x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.search = search;

var findById =
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(collection, id) {
    var project,
        objId,
        _ref8,
        db,
        _client4,
        ret,
        _args4 = arguments;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            project = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
            _context4.prev = 1;
            objId = (0, _helpers.getObjectId)(id);
            _context4.next = 5;
            return connectDB();

          case 5:
            _ref8 = _context4.sent;
            db = _ref8.db;
            _client4 = _ref8.client;
            _context4.next = 10;
            return db.collection(collection).find({
              _id: objId
            }).project(project).toArray();

          case 10:
            ret = _context4.sent;
            return _context4.abrupt("return", {
              data: ret,
              meta: {}
            });

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            (0, _logger.redf)('ERROR: dbFunctions.findById', _context4.t0.message);
            return _context4.abrupt("return", returnError(_context4.t0));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 14]]);
  }));

  return function findById(_x6, _x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.findById = findById;

var findOneAndDelete =
/*#__PURE__*/
function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(collection, id) {
    var objId, _ref10, db, _client5, ret;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            objId = (0, _helpers.getObjectId)(id);
            _context5.next = 4;
            return connectDB();

          case 4:
            _ref10 = _context5.sent;
            db = _ref10.db;
            _client5 = _ref10.client;
            _context5.next = 9;
            return db.collection(collection).findOneAndDelete({
              _id: objId
            });

          case 9:
            ret = _context5.sent;
            return _context5.abrupt("return", {
              data: [ret.value],
              meta: {}
            });

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            (0, _logger.redf)('ERROR: dbFunctions.findOneAndDelete', _context5.t0.message);
            return _context5.abrupt("return", returnError(_context5.t0));

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));

  return function findOneAndDelete(_x8, _x9) {
    return _ref9.apply(this, arguments);
  };
}();

exports.findOneAndDelete = findOneAndDelete;

var findOneAndUpdate =
/*#__PURE__*/
function () {
  var _ref11 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(collection, id, filter) {
    var returnOriginal,
        cleanFilter,
        objId,
        _ref12,
        db,
        _client6,
        ret,
        _args6 = arguments;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            returnOriginal = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
            _context6.prev = 1;
            // if the filter has the _id prop, remove it
            cleanFilter = (0, _helpers.removeIdProp)(filter);
            objId = (0, _helpers.getObjectId)(id);
            _context6.next = 6;
            return connectDB();

          case 6:
            _ref12 = _context6.sent;
            db = _ref12.db;
            _client6 = _ref12.client;
            _context6.next = 11;
            return db.collection(collection).findOneAndUpdate({
              _id: objId
            }, {
              $set: cleanFilter
            }, {
              returnOriginal: returnOriginal
            });

          case 11:
            ret = _context6.sent;
            return _context6.abrupt("return", {
              data: [ret.value],
              meta: {}
            });

          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](1);
            (0, _logger.redf)('ERROR: dbFunctions.findOneAndUpdate', _context6.t0);
            return _context6.abrupt("return", returnError(_context6.t0));

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 15]]);
  }));

  return function findOneAndUpdate(_x10, _x11, _x12) {
    return _ref11.apply(this, arguments);
  };
}();

exports.findOneAndUpdate = findOneAndUpdate;

var insertOne =
/*#__PURE__*/
function () {
  var _ref13 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(collection, data) {
    var _ref14, db, _client7, ret;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return connectDB();

          case 3:
            _ref14 = _context7.sent;
            db = _ref14.db;
            _client7 = _ref14.client;
            _context7.next = 8;
            return db.collection(collection).insertOne(data);

          case 8:
            ret = _context7.sent;
            return _context7.abrupt("return", {
              data: ret.ops,
              meta: {
                n: 1
              }
            });

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            (0, _logger.redf)('ERROR: dbFunctions.insertOne', _context7.t0);
            return _context7.abrupt("return", returnError(_context7.t0));

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 12]]);
  }));

  return function insertOne(_x13, _x14) {
    return _ref13.apply(this, arguments);
  };
}();

exports.insertOne = insertOne;

var insertMany =
/*#__PURE__*/
function () {
  var _ref15 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(collection, data) {
    var _ref16, db, _client8, ret;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return connectDB();

          case 3:
            _ref16 = _context8.sent;
            db = _ref16.db;
            _client8 = _ref16.client;
            _context8.next = 8;
            return db.collection(collection).insertMany(data);

          case 8:
            ret = _context8.sent;
            return _context8.abrupt("return", {
              data: ret.ops,
              meta: {
                n: 1
              }
            });

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            (0, _logger.redf)('ERROR: dbFunctions.insertMany', _context8.t0.message);
            return _context8.abrupt("return", returnError(_context8.t0));

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 12]]);
  }));

  return function insertMany(_x15, _x16) {
    return _ref15.apply(this, arguments);
  };
}(); // MongoDB test


exports.insertMany = insertMany;

function testConnection() {
  return _testConnection.apply(this, arguments);
}

function _testConnection() {
  _testConnection = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee11() {
    var _ref17, db, _client9, ret;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            (0, _logger.yellowf)('MongoDB connection test...');
            _context11.prev = 1;
            _context11.next = 4;
            return connectDB();

          case 4:
            _ref17 = _context11.sent;
            db = _ref17.db;
            _client9 = _ref17.client;
            _context11.next = 9;
            return db.collection('todos').find({}).toArray();

          case 9:
            ret = _context11.sent;
            // console.log('SUCCESS', ret.length)
            (0, _logger.greenf)('MongoDB connection test:', 'success');
            _context11.next = 17;
            break;

          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](1);
            (0, _logger.redf)('MongoDB connection test', 'failure');
            console.log('ERROR: dbFunctions.find', _context11.t0.message);

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 13]]);
  }));
  return _testConnection.apply(this, arguments);
}

testConnection();