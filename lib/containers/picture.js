"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picture = function Picture(props) {
  return _react.default.createElement("div", {
    className: "picture",
    style: {
      backgroundImage: "url(".concat(props.picture.images.standard_resolution.url, ")"),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
  });
};

var _default = Picture;
exports.default = _default;