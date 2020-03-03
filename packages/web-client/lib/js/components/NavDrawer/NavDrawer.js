"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _QuestionAnswer = _interopRequireDefault(require("@material-ui/icons/QuestionAnswer"));

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

require("./NavDrawer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

var NavDrawer = function NavDrawer(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen;
  var classes = useStyles();

  var toggleDrawer = function toggleDrawer(open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setOpen(open);
    };
  };

  var sideList = function sideList(side) {
    return _react.default.createElement("div", {
      className: classes.list,
      role: "presentation",
      onClick: toggleDrawer(false),
      onKeyDown: toggleDrawer(false)
    }, _react.default.createElement(_List.default, null, ['Users', 'Talks', 'Rooms'].map(function (text, index) {
      return _react.default.createElement(_ListItem.default, {
        key: text,
        onClick: function onClick() {
          window.location.replace("/".concat(text));
        }
      }, _react.default.createElement(_ListItemIcon.default, null, text === 'Users' ? _react.default.createElement(_AccountCircle.default, null) : text === 'Talks' ? _react.default.createElement(_QuestionAnswer.default, null) : _react.default.createElement(_People.default, null)), _react.default.createElement(_ListItemText.default, {
        primary: text,
        className: "pages-names"
      }));
    })));
  };

  return _react.default.createElement(_Drawer.default, {
    open: open,
    onClose: toggleDrawer(false)
  }, sideList('left'));
};

var _default = NavDrawer;
exports.default = _default;