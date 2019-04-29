"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactStarsRating = _interopRequireDefault(require("react-stars-rating"));

var _left_arrow = _interopRequireDefault(require("./left_arrow.jsx"));

var _right_arrow = _interopRequireDefault(require("./right_arrow.jsx"));

var _pictures = _interopRequireDefault(require("../../data/pictures"));

var _reviews = _interopRequireDefault(require("../../data/reviews"));

var _header = _interopRequireDefault(require("./header.jsx"));

var _cover = _interopRequireDefault(require("./cover.jsx"));

var _picture_list = _interopRequireDefault(require("../containers/picture_list.jsx"));

var _review_list = _interopRequireDefault(require("./review_list.jsx"));

var _marker = _interopRequireDefault(require("./marker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

_fontawesomeSvgCore.library.add(_freeBrandsSvgIcons.fab, _freeSolidSvgIcons.faEnvelope);

var google_key = process.env.REACT_APP_GOOGLE_KEY;
console.log(process.env.REACT_APP_GOOGLE_KEY);

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.goToPrevSlide = function () {
      if (_this.state.currentIndex === 0) return; // This will not run if we met the if condition above

      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + _this.slideWidth()
        };
      });
    };

    _this.goToNextSlide = function () {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (_this.state.currentIndex === _this.state.pictures.length - 1) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      } // This will not run if we met the if condition above


      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this.slideWidth()
        };
      });
    };

    _this.slideWidth = function () {
      return document.querySelector('.picture').clientWidth;
    };

    _this.state = {
      pictures: _pictures.default,
      currentIndex: 0,
      translateValue: 0,
      reviews: _reviews.default
    };
    return _this;
  }

  _createClass(App, [{
    key: "center",
    value: function center() {
      return {
        lat: 52.498190,
        lng: 13.442230
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "main-container"
      }, _react.default.createElement("div", {
        className: "navbar"
      }, _react.default.createElement(_header.default, null)), _react.default.createElement("div", {
        id: "cover_page"
      }, _react.default.createElement(_cover.default, null)), _react.default.createElement("div", {
        className: "pic-rev"
      }, _react.default.createElement("div", {
        id: "pictures"
      }, _react.default.createElement("h2", {
        className: "title-container"
      }, "Pictures"), _react.default.createElement("div", {
        className: "slider"
      }, _react.default.createElement("div", {
        className: "slider-wrapper",
        style: {
          transform: "translateX(".concat(this.state.translateValue, "px)"),
          transition: 'transform ease-out 0.45s'
        }
      }, _react.default.createElement(_picture_list.default, {
        pictures: this.state.pictures
      })), _react.default.createElement(_left_arrow.default, {
        goToPrevSlide: this.goToPrevSlide
      }), _react.default.createElement(_right_arrow.default, {
        goToNextSlide: this.goToNextSlide
      }))), _react.default.createElement("div", {
        id: "reviews"
      }, _react.default.createElement("h2", {
        className: "title-container"
      }, "What our customers says about us:"), _react.default.createElement("div", {
        className: "reviews"
      }, _react.default.createElement(_review_list.default, {
        reviews: this.state.reviews
      })))), _react.default.createElement("div", {
        id: "contact"
      }, _react.default.createElement("h2", null, "Contact"), _react.default.createElement("div", {
        className: "contact"
      }, _react.default.createElement("div", {
        className: "contact-info-hours"
      }, _react.default.createElement("div", {
        className: "contact-information"
      }, _react.default.createElement("h2", null, "B\xE4rsilien"), _react.default.createElement("p", null, "Falckensteinstra\xDFe 35, Berlin"), _react.default.createElement("p", null, "Contact Number: 0177 1690204")), _react.default.createElement("div", {
        className: "info-links"
      }, _react.default.createElement("div", {
        className: "info-hours"
      }, _react.default.createElement("p", {
        className: "title-info-hours"
      }, "Open hours:"), _react.default.createElement("p", null, "Thurdays - Sundays"), _react.default.createElement("p", null, "12:00 - 19:00")), _react.default.createElement("ul", {
        className: "icons"
      }, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "mailto:baersilien@gmail.com"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "envelope"
      }))), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://www.facebook.com/Baersilien"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fab', 'facebook']
      }))), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "https://www.instagram.com/baersilien/"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fab', 'instagram']
      })))))), _react.default.createElement("div", {
        className: "map-container"
      }, _react.default.createElement(_googleMapReact.default, {
        defaultCenter: this.center(),
        defaultZoom: 12 // bootstrapURLKeys={{ key:`${google_key}`}}

      }, _react.default.createElement(_marker.default, {
        lat: 52.498190,
        lng: 13.442230
      }))))));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;