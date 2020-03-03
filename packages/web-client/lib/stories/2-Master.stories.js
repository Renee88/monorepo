"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TalksMater = exports.UsersMaster = exports.actionsData = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _core = require("@material-ui/core");

var _Master = _interopRequireDefault(require("../js/components/Master"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  title: 'Master',
  component: _Master.default,
  excludeStories: /.*Data$/
};
exports.default = _default;
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
var users = [{
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}, {
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}, {
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}, {
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}, {
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}, {
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}];
var talks = [{
  name: 'Monkeys'
}, {
  name: 'Human'
}, {
  name: 'Bla'
}];
var actionsData = {
  displayChosenUser: (0, _addonActions.action)('displayChosenUser'),
  displayChosenTalk: (0, _addonActions.action)('displayChosenTalk'),
  displayChosenRoom: (0, _addonActions.action)('displayChosenRoom')
};
exports.actionsData = actionsData;

var UsersMaster = function UsersMaster() {
  var classes = useStyles();
  return _react.default.createElement(_Master.default, _extends({
    state: {
      master: users,
      type: 'Users'
    },
    classes: classes
  }, actionsData));
};

exports.UsersMaster = UsersMaster;

var TalksMater = function TalksMater() {
  var classes = useStyles();
  return _react.default.createElement(_Master.default, _extends({
    state: {
      master: talks,
      type: 'Talks'
    },
    classes: classes
  }, actionsData));
};

exports.TalksMater = TalksMater;