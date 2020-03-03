"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactYoutube = _interopRequireDefault(require("react-youtube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Talk = function Talk(_ref) {
  var _ref$chosenTalk = _ref.chosenTalk,
      name = _ref$chosenTalk.name,
      youTubeID = _ref$chosenTalk.youTubeID,
      classes = _ref.classes;
  return name && youTubeID ? _react.default.createElement("div", {
    className: classes.paper
  }, _react.default.createElement("h1", {
    className: classes.title
  }, name), _react.default.createElement(_reactYoutube.default, {
    videoId: youTubeID,
    className: classes.video
  })) : null;
};

var _default = Talk;
exports.default = _default;