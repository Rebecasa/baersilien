"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStarsRating = _interopRequireDefault(require("react-stars-rating"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Review = function Review(props) {
  return _react.default.createElement("div", {
    className: "card"
  }, _react.default.createElement("div", {
    className: "card-category"
  }, _react.default.createElement(_reactStarsRating.default, {
    rating: props.review.rating,
    theme: "warning",
    disabled: "true",
    starDimension: "30px"
  })), _react.default.createElement("div", {
    className: "card-description"
  }, _react.default.createElement("p", null, props.review.text)));
};

var _default = Review;
exports.default = _default;