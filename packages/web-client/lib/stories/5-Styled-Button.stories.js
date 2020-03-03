"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _StyledButton = _interopRequireDefault(require("../StyledButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Styled Button'
};
exports.default = _default;

var Default = function Default() {
  return _react.default.createElement(_StyledButton.default, {
    onClick: (0, _addonActions.action)('Styled button clicked')
  }, "Styled Button");
};

exports.Default = Default;