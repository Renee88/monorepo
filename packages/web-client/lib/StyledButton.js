"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);\n  border-radius: 3px;\n  border: 0;\n  color: white;\n  height: 48px;\n  padding: 0 30px;\n  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = (0, _styledComponents.default)(_Button.default)(_templateObject());
var _default = StyledButton;
exports.default = _default;