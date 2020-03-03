"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _core = require("@material-ui/core");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Master = _interopRequireDefault(require("../Master"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _User = _interopRequireDefault(require("./User"));

var _UserCard = _interopRequireDefault(require("./UserCard"));

require("./Users.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    card: {
      margin: 5
    },
    scroll: {
      backgroundColor: '#DFE0E2',
      height: '90vh'
    },
    cover: {
      display: 'inline-block',
      width: 40,
      borderRadius: 20
    },
    name: {
      marginLeft: 20
    },
    online: {
      color: '#32ff7e'
    },
    offline: {
      color: '#ff3838'
    },
    userDetails: {
      display: 'flex',
      alignItems: 'center'
    },
    userPage: {
      margin: 10,
      padding: 10
    },
    detail: {
      background: 'linear-gradient(45deg,#cd84f1, #c56cf0)',
      height: 'fit-content',
      zIndex: '-1'
    }
  };
});

var Users = function Users() {
  var classes = useStyles();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      chosenUser = _useState4[0],
      setChosenUser = _useState4[1];

  (0, _react.useEffect)(function () {
    _axios.default.get('http://localhost:4000/users').then(function (users) {
      users.data.map(function (user) {
        return user.online = Math.floor(Math.random() * 2);
      });
      setUsers(users.data);
    });
  }, []);

  var displayChosenUser = function displayChosenUser(email) {
    return function () {
      var chosenUser = users.find(function (user) {
        return user.email === email;
      });
      chosenUser ? _axios.default.get('http://loremricksum.com/api/?paragraphs=3&quotes=2').then(function (lifeMoto) {
        chosenUser.lifeMoto = lifeMoto.data.data;
        setChosenUser(chosenUser);
      }) : null;
    };
  };

  return _react.default.createElement("div", {
    className: "master-detail-container"
  }, _react.default.createElement(_Master.default, {
    state: {
      master: users,
      type: 'Users'
    },
    classes: classes,
    displayChosenUser: displayChosenUser
  }), _react.default.createElement("div", {
    className: classes.detail
  }, _react.default.createElement(_Paper.default, {
    className: chosenUser.name ? classes.userPage : null
  }, _react.default.createElement(_User.default, {
    chosenUser: chosenUser
  }))));
};

var _default = Users;
exports.default = _default;