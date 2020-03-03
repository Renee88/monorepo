"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Room = function Room(_ref) {
  var name = _ref.chosenRoom.name;
  return _react.default.createElement("div", null, name);
};

var _default = Room;
exports.default = _default;