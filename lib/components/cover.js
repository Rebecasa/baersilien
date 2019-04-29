"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cover = function Cover() {
  return _react.default.createElement("div", {
    className: "cover-container"
  }, _react.default.createElement("div", {
    className: "background_image",
    style: {
      backgroundImage: "url('/assets/images/capa.jpg')"
    }
  }));
};

var _default = Cover;
exports.default = _default;