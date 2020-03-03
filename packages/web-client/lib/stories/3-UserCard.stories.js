"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCardStory = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _core = require("@material-ui/core");

var _UserCard = _interopRequireDefault(require("../js/components/Users/UserCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  title: 'User Card',
  component: _UserCard.default,
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
var user = {
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}; //   const newTheme = {
//     themeName: 'Grey Theme',
//     palette: {
//         primary1Color: '#00bcd4',
//         alternateTextColor: '#4a4a4a',
//         canvasColor: '#616161',
//         textColor: '#bdbdbd',
//         secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
//         disabledColor: '#757575',
//         accent1Color: '#607d8b',
//     },
// };

var UserCardStory = function UserCardStory() {
  var UserCardData = {
    key: 1,
    user: user,
    classes: useStyles()
  };
  return _react.default.createElement(_UserCard.default, _extends({}, UserCardData, {
    displayChosenUser: function displayChosenUser() {
      return (0, _addonActions.action)('displayChosenUser');
    }
  }));
};

exports.UserCardStory = UserCardStory;