"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _UserCard = _interopRequireDefault(require("./Users/UserCard"));

var _reactScrollToBottom = _interopRequireDefault(require("react-scroll-to-bottom"));

var _TalkCard = _interopRequireDefault(require("./Talks/TalkCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Master = function Master(_ref) {
  var _ref$state = _ref.state,
      master = _ref$state.master,
      type = _ref$state.type,
      classes = _ref.classes,
      displayChosenUser = _ref.displayChosenUser,
      displayChosenTalk = _ref.displayChosenTalk,
      displayChosenRoom = _ref.displayChosenRoom;
  return _react.default.createElement(_reactScrollToBottom.default, {
    className: classes.scroll
  }, type === 'Users' ? master.map(function (user, i) {
    return _react.default.createElement(_UserCard.default, {
      key: i,
      user: user,
      classes: classes,
      displayChosenUser: displayChosenUser
    });
  }) : type === 'Talks' ? master.map(function (talk, i) {
    return _react.default.createElement(_TalkCard.default, {
      key: i,
      talk: talk,
      classes: classes,
      displayChosenTalk: displayChosenTalk
    });
  }) : null);
};

var _default = Master;
exports.default = _default;