"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TalkCard = function TalkCard(_ref) {
  var talk = _ref.talk,
      classes = _ref.classes,
      displayChosenTalk = _ref.displayChosenTalk;
  return _react.default.createElement(_core.Card, {
    key: talk.youTubeID,
    className: classes.talkCard,
    onClick: displayChosenTalk(talk.youTubeID)
  }, _react.default.createElement(_core.CardActionArea, null, _react.default.createElement(_core.CardContent, null, _react.default.createElement(_core.Typography, null, talk.name))));
};

var _default = TalkCard;
exports.default = _default;