"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _review = _interopRequireDefault(require("../containers/review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReviewList = function ReviewList(props) {
  var renderList = function renderList() {
    return props.reviews.map(function (review, index) {
      return _react.default.createElement(_review.default, {
        key: index,
        review: review
      });
    });
  };

  return renderList();
};

var _default = ReviewList;
exports.default = _default;