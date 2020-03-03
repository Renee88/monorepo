"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var User = function User(_ref) {
  var _ref$chosenUser = _ref.chosenUser,
      name = _ref$chosenUser.name,
      lifeMoto = _ref$chosenUser.lifeMoto,
      age = _ref$chosenUser.age,
      dogs = _ref$chosenUser.dogs;
  return name && age && lifeMoto ? _react.default.createElement("div", null, _react.default.createElement("p", null, "Hi, I am ", name), _react.default.createElement("p", null, " I am ", age, " years old and my life moto is: "), lifeMoto.map(function (sentence, i) {
    return _react.default.createElement("p", {
      key: i
    }, sentence);
  }), dogs.map(function (dog, i) {
    return _react.default.createElement("div", {
      key: i
    }, _react.default.createElement("p", {
      kay: i
    }, "My favourite pet is ", dog.dog_name), _react.default.createElement("img", {
      key: i,
      src: dog.picture
    }));
  })) : null;
};

var _default = User;
exports.default = _default;