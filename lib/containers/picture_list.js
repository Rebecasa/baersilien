"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _picture = _interopRequireDefault(require("./picture"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PictureList = function PictureList(props) {
  var renderList = function renderList() {
    return props.pictures.map(function (picture, index) {
      return _react.default.createElement(_picture.default, {
        key: index,
        picture: picture
      });
    });
  };

  return renderList();
};

var _default = PictureList;
exports.default = _default;