"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Routes = _interopRequireDefault(require("./js/components/Routes/Routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_Routes.default, null));
};

var _default = App;
exports.default = _default;