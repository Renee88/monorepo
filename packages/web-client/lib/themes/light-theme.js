"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.overridings = void 0;

var _styles = require("@material-ui/core/styles");

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _purple = _interopRequireDefault(require("@material-ui/core/colors/purple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primaryGreen = _green.default[500];
var accentGreen = _green.default.A200;
var darkGreen = _green.default[900];
var primaryPurple = _purple.default[500];
var accentPurple = _purple.default.A200;
var darkPurple = _purple.default[900];
var overridings = {
  name: 'Light Theme',
  palette: {
    primary: {
      light: accentGreen,
      main: primaryGreen,
      dark: darkGreen,
      contrastText: "#fff"
    },
    secondary: {
      light: accentPurple,
      main: primaryPurple,
      dark: darkPurple,
      contrastText: "#fff"
    }
  }
};
exports.overridings = overridings;

var _default = (0, _styles.createMuiTheme)(overridings);

exports.default = _default;