"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoUrl = exports.dbName = exports.setVars = void 0;

var _logger = require("../logger");

var _process$env = process.env,
    MONGODB_URL_DEV_LOCAL = _process$env.MONGODB_URL_DEV_LOCAL,
    DB_NAME_DEV_LOCAL = _process$env.DB_NAME_DEV_LOCAL,
    MONGODB_URL_DEV_REMOTE = _process$env.MONGODB_URL_DEV_REMOTE,
    DB_NAME_DEV_REMOTE = _process$env.DB_NAME_DEV_REMOTE,
    MONGODB_URL_TEST_LOCAL = _process$env.MONGODB_URL_TEST_LOCAL,
    DB_NAME_TEST_LOCAL = _process$env.DB_NAME_TEST_LOCAL,
    MONGODB_URL_TEST_REMOTE = _process$env.MONGODB_URL_TEST_REMOTE,
    DB_NAME_TEST_REMOTE = _process$env.DB_NAME_TEST_REMOTE,
    MONGODB_URL_PRODUCTION = _process$env.MONGODB_URL_PRODUCTION,
    DB_NAME_PRODUCTION = _process$env.DB_NAME_PRODUCTION,
    NODE_ENV = _process$env.NODE_ENV;
(0, _logger.greenf)('NODE_ENV', NODE_ENV); // devLocal

(0, _logger.yellow)('MONGODB_URL_DEV_LOCAL', MONGODB_URL_DEV_LOCAL);
(0, _logger.yellow)('DB_NAME_DEV_LOCAL', DB_NAME_DEV_LOCAL); // devRemote

(0, _logger.yellow)('MONGODB_URL_DEV_REMOTE', MONGODB_URL_DEV_REMOTE);
(0, _logger.yellow)('DB_NAME_DEV_REMOTE', DB_NAME_TEST_REMOTE); // testLocal

(0, _logger.yellow)('MONGODB_URL_TEST_LOCAL', MONGODB_URL_TEST_LOCAL);
(0, _logger.yellow)('DB_NAME_TEST_LOCAL', DB_NAME_TEST_LOCAL); // testLocal

(0, _logger.yellow)('MONGODB_URL_TEST_REMOTE', MONGODB_URL_TEST_REMOTE);
(0, _logger.yellow)('DB_NAME_TEST_REMOTE', DB_NAME_TEST_REMOTE); // production

(0, _logger.yellow)('MONGODB_URL_PRODUCTION', MONGODB_URL_PRODUCTION);
(0, _logger.yellow)('DB_NAME_PRODUCTION', DB_NAME_PRODUCTION); // environment

(0, _logger.yellow)('NODE_ENV', NODE_ENV);
/*
  Possible environments

  dev
   - devLocal
   - devRemote (not implemented)
  test
   - testLocal (not implemented)
   - testRemote (not implemented)
  prod
   - production

*/

var _dbName = '';
var _mongoUrl = '';

var setVars = function () {
  switch (NODE_ENV) {
    case 'devLocal':
      console.log('setVars case: devLocal');
      _dbName = DB_NAME_DEV_LOCAL;
      _mongoUrl = MONGODB_URL_DEV_LOCAL;
      break;

    case 'devRemote':
      console.log('setVars case: devRemote');
      _dbName = DB_NAME_DEV_REMOTE;
      _mongoUrl = MONGODB_URL_DEV_REMOTE;
      break;

    case 'testLocal':
      console.log('setVars case: testLocal');
      _dbName = DB_NAME_TEST_LOCAL;
      _mongoUrl = MONGODB_URL_TEST_LOCAL;
      break;

    case 'testRemote':
      console.log('setVars case: testRemote');
      _dbName = DB_NAME_TEST_REMOTE;
      _mongoUrl = MONGODB_URL_TEST_REMOTE;
      break;

    case 'production':
      console.log('setVars case: production');
      _dbName = DB_NAME_PRODUCTION;
      _mongoUrl = MONGODB_URL_PRODUCTION;
      break;

    default:
      console.log('setVars case: DEFAULT devRemote');
      _dbName = DB_NAME_DEV_REMOTE;
      _mongoUrl = MONGODB_URL_DEV_REMOTE;
  }
}();

exports.setVars = setVars;
var dbName = _dbName;
exports.dbName = dbName;
var mongoUrl = _mongoUrl;
exports.mongoUrl = mongoUrl;
(0, _logger.greenf)('database', dbName);
(0, _logger.greenf)('mongoUrl', mongoUrl);