"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.bluef = exports.yellowf = exports.greenf = exports.redf = exports.blue = exports.yellow = exports.green = exports.red = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var log = console.log;

var checkValue = function checkValue(value) {
  if (!value) {
    return '';
  } else {
    return value;
  }
};

var red = function red(message, value) {
  log(_chalk["default"].bgRed(" ".concat(message, " ")), checkValue(value));
};

exports.red = red;

var green = function green(message, value) {
  log(_chalk["default"].bgGreen(" ".concat(message, " ")), checkValue(value));
};

exports.green = green;

var yellow = function yellow(message, value) {
  // log(chalk.bgYellow(` ${message} `), checkValue(value))
  log(_chalk["default"].bgYellow(_chalk["default"].black(" ".concat(message, " "))), checkValue(value));
};

exports.yellow = yellow;

var blue = function blue(message, value) {
  log(_chalk["default"].bgBlue(" ".concat(message, " ")), checkValue(value));
};

exports.blue = blue;

var redf = function redf(message, value) {
  log(_chalk["default"].red("".concat(message)), checkValue(value));
};

exports.redf = redf;

var greenf = function greenf(message, value) {
  log(_chalk["default"].green("".concat(message)), checkValue(value));
};

exports.greenf = greenf;

var yellowf = function yellowf(message, value) {
  log(_chalk["default"].yellow("".concat(message)), checkValue(value));
};

exports.yellowf = yellowf;

var bluef = function bluef(message, value) {
  log(_chalk["default"].blue("".concat(message)), checkValue(value));
};

exports.bluef = bluef;
var _default = {
  red: red,
  green: green,
  yellow: yellow,
  blue: blue,
  redf: redf,
  greenf: greenf,
  yellowf: yellowf,
  bluef: bluef
};
exports["default"] = _default;