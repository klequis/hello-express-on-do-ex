import { red, yellow, redf, greenf } from '../logger'
// require('dotenv').load()

// const nodeEnv = process.env.NODE_ENV || ''
// greenf('NODE_ENV', nodeEnv)

require('dotenv').config()

const {
  // devLocal
  MONGODB_URL_DEV_LOCAL,
  DB_NAME_DEV_LOCAL,
  // devRemote
  MONGODB_URL_DEV_REMOTE,
  DB_NAME_DEV_REMOTE,
  // testLocal
  MONGODB_URL_TEST_LOCAL,
  DB_NAME_TEST_LOCAL,

  // testRemote
  MONGODB_URL_TEST_REMOTE,
  DB_NAME_TEST_REMOTE,
  // production
  MONGODB_URL_PRODUCTION,
  DB_NAME_PRODUCTION,
  // environment
  NODE_ENV
} = process.env


greenf('NODE_ENV', NODE_ENV)

// // devLocal
// yellow('MONGODB_URL_DEV_LOCAL', MONGODB_URL_DEV_LOCAL,)
// yellow('DB_NAME_DEV_LOCAL', DB_NAME_DEV_LOCAL)
// // devRemote
// yellow('MONGODB_URL_DEV_REMOTE', MONGODB_URL_DEV_REMOTE)
// yellow('DB_NAME_DEV_REMOTE', DB_NAME_TEST_REMOTE)
// // testLocal
// yellow('MONGODB_URL_TEST_LOCAL', MONGODB_URL_TEST_LOCAL)
// yellow('DB_NAME_TEST_LOCAL', DB_NAME_TEST_LOCAL)
// // testLocal
// yellow('MONGODB_URL_TEST_REMOTE', MONGODB_URL_TEST_REMOTE)
// yellow('DB_NAME_TEST_REMOTE', DB_NAME_TEST_REMOTE)
// // production
// yellow('MONGODB_URL_PRODUCTION', MONGODB_URL_PRODUCTION)
// yellow('DB_NAME_PRODUCTION', DB_NAME_PRODUCTION)
// // environment
// yellow('NODE_ENV', NODE_ENV)


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

let _dbName = ''
let _mongoUrl = ''

export const setVars = (() => {

  switch (NODE_ENV) {
    case 'devLocal':
      _dbName = DB_NAME_DEV_LOCAL
      _mongoUrl = MONGODB_URL_DEV_LOCAL
      break;
    case 'devRemote':
      _dbName = DB_NAME_DEV_REMOTE
      _mongoUrl = MONGODB_URL_DEV_REMOTE
      break;
    case 'testLocal':
      _dbName = DB_NAME_TEST_LOCAL
      _mongoUrl = MONGODB_URL_TEST_LOCAL
      break;
      case 'testRemote':
      _dbName  =DB_NAME_TEST_REMOTE
      _mongoUrl = MONGODB_URL_TEST_REMOTE
      break;
    case 'production':
      _dbName = DB_NAME_PRODUCTION
      _mongoUrl = MONGODB_URL_PRODUCTION
      break;
    default:
      _dbName = DB_NAME_DEV_LOCAL
      _mongoUrl = MONGODB_URL_DEV_LOCAL
  }


})()

export const dbName = _dbName
export const mongoUrl = _mongoUrl
greenf('database', dbName)
greenf('mongoUrl', mongoUrl)

