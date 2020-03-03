"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Talk = _interopRequireDefault(require("./Talk"));

require("./Talks.css");

var _axios = _interopRequireDefault(require("axios"));

var _Master = _interopRequireDefault(require("../Master"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    video: {
      display: 'flex',
      height: '390',
      width: '640',
      margin: 'auto',
      playerVars: {
        autoplay: 1
      }
    },
    talk: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'white',
      background: 'linear-gradient(45deg,#584FEA,  #3B79EA)',
      zIndex: '-1'
    },
    master: {
      backgroundColor: '#DFE0E2'
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center'
    },
    title: {
      textAlign: 'center'
    },
    talkCard: {
      margin: '5px'
    }
  };
});

var Talks = function Talks() {
  var classes = useStyles();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      talks = _useState2[0],
      setTalks = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      chosenTalk = _useState4[0],
      setChosenTalk = _useState4[1];

  (0, _react.useEffect)(function () {
    _axios.default.get('http://localhost:4000/talks').then(function (talks) {
      talks = talks.data;
      setTalks(talks);
    });
  }, []);

  var displayChosenTalk = function displayChosenTalk(id) {
    return function () {
      var chosenTalk = talks.find(function (talk) {
        return talk.youTubeID === id;
      });
      setChosenTalk(chosenTalk);
    };
  };

  return _react.default.createElement("div", {
    className: "master-detail-container"
  }, _react.default.createElement(_Master.default, {
    state: {
      master: talks,
      type: 'Talks'
    },
    classes: classes,
    displayChosenTalk: displayChosenTalk
  }), _react.default.createElement("div", {
    className: classes.detail
  }, _react.default.createElement(_Paper.default, {
    square: true
  }, _react.default.createElement(_Talk.default, {
    chosenTalk: chosenTalk,
    classes: classes
  }))));
};

var _default = Talks;
exports.default = _default;