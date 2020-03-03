"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _Rooms = _interopRequireDefault(require("../Rooms/Rooms"));

var _Users = _interopRequireDefault(require("../Users/Users"));

var _Talks = _interopRequireDefault(require("../Talks/Talks"));

var _Home = _interopRequireDefault(require("../Home/Home"));

var _NavDrawer = _interopRequireDefault(require("../NavDrawer/NavDrawer"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

require("./Routes.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  };
});

var Routes = function Routes() {
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return _react.default.createElement("div", {
    id: "main-container"
  }, _react.default.createElement("div", {
    id: "main-bar-container"
  }, _react.default.createElement(_Menu.default, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }), _react.default.createElement(_reactRouterDom.Link, {
    to: "/home",
    className: classes.link
  }, _react.default.createElement("div", {
    id: "logo"
  }, "My Monorepo"))), _react.default.createElement(_NavDrawer.default, {
    open: open,
    setOpen: setOpen
  }), _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    render: function render() {
      return _react.default.createElement(_reactRouterDom.Redirect, {
        to: "/home"
      });
    }
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/home",
    component: _Home.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/users",
    component: _Users.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/talks",
    component: _Talks.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/rooms",
    component: _Rooms.default
  })));
};

var _default = Routes;
exports.default = _default;