"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require('express')
// const bodyParser = require('body-parser')
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
});