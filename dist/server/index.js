"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _todoRoute = _interopRequireDefault(require("../routes/todo-route"));

var _logger = require("../logger");

var _dotenv = _interopRequireDefault(require("dotenv"));

var result = _dotenv["default"].config();

(0, _logger.yellow)('result', result); // import 'dotenv/config'
// console.log('** 1-env', process.env)

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _morgan["default"])('dev'));
app.use('/api/todo', _todoRoute["default"]);
app.get('/api', function (req, res) {
  (0, _logger.redf)('Invalid endpoint!');
  res.send('Invalid endpoint!');
});
var port = result.parsed.PORT; // const port = 3030

(0, _logger.yellow)('server/index.js: port', result.parsed.PORT);
app.listen(port, function () {
  console.log("Events API server is listening on port ".concat(port));
});
var _default = app;
exports["default"] = _default;