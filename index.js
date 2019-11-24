"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _is = _interopRequireDefault(require("is"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Function.prototype.safe = function (args) {
  var argumentTypes = this.argumentTypes;

  if (_is["default"].object(argumentTypes)) {
    Object.keys(argumentTypes).forEach(function (key) {
      if (argumentTypes[key](args[key]) === false) throw new Error("".concat(key, " argument type is wrong, ").concat(key, " value is ").concat(args[key]));
    });
  }

  return this(args);
};

var ArgumentTypes = {
  array: _is["default"].array,
  bool: _is["default"].bool,
  func: _is["default"].fn,
  number: _is["default"].number,
  object: _is["default"].object,
  string: _is["default"].string,
  symbol: _is["default"].symbol,
  instanceOf: _is["default"].instanceOf,
  // node:
  // element:
  // elementType:
  // oneOf:
  // oneOfType:
  // arrayOf:
  // objectOf:
  // shape:
  // exact:
  any: function any() {
    return true;
  }
};
var _default = ArgumentTypes;
exports["default"] = _default;