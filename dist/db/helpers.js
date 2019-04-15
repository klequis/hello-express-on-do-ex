"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.removeIdProp = exports.getObjectId = exports.objectIdFromHexString = exports.isValidObjectID = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _mongodb = require("mongodb");

var _ramda = require("ramda");

var _logger = require("../logger");

var isValidObjectID = function isValidObjectID(id) {
  return _mongodb.ObjectID.isValid(id);
};

exports.isValidObjectID = isValidObjectID;

var objectIdFromHexString = function objectIdFromHexString(hexId) {
  try {
    return _mongodb.ObjectID.createFromHexString(hexId);
  } catch (e) {
    (0, _logger.redf)('ERROR /db/helpers.js.objectidFromHexString', e);
  }
};

exports.objectIdFromHexString = objectIdFromHexString;

var getObjectId = function getObjectId(id) {
  return (0, _typeof2["default"])(id) === 'object' ? id : objectIdFromHexString(id);
};

exports.getObjectId = getObjectId;

var removeIdProp = function removeIdProp(obj) {
  return (0, _ramda.omit)(['_id'], obj);
};

exports.removeIdProp = removeIdProp;
var _default = {
  objectIdFromHexString: objectIdFromHexString
};
exports["default"] = _default;