"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("../assets/stylesheets/application.scss");

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// internal modules
// render an instance of the component in the DOM
_reactDom.default.render(_react.default.createElement(_app.default, null), document.querySelector('#root'));