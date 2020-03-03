"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _FiberManualRecord = _interopRequireDefault(require("@material-ui/icons/FiberManualRecord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCard = function UserCard(_ref) {
  var classes = _ref.classes,
      user = _ref.user,
      displayChosenUser = _ref.displayChosenUser;
  return _react.default.createElement(_core.Card, {
    className: classes.card
  }, _react.default.createElement(_core.CardActionArea, {
    onClick: displayChosenUser(user.email)
  }, _react.default.createElement(_core.CardContent, {
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.userDetails
  }, _react.default.createElement(_core.CardMedia, {
    className: classes.cover,
    component: "img",
    alt: user.name,
    image: "".concat(user.picture)
  }), _react.default.createElement(_core.Typography, {
    className: classes.name,
    display: "inline"
  }, user.name)), _react.default.createElement(_core.Typography, null, _react.default.createElement(_FiberManualRecord.default, {
    className: user.online ? classes.online : classes.offline
  })))));
};

var _default = UserCard;
exports.default = _default;