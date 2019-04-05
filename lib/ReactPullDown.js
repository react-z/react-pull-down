"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pullDown = _interopRequireDefault(require("./pullDown"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * React Pull Down component
 **/
var PullDown =
/*#__PURE__*/
function (_Component) {
  _inherits(PullDown, _Component);

  function PullDown() {
    _classCallCheck(this, PullDown);

    return _possibleConstructorReturn(this, _getPrototypeOf(PullDown).apply(this, arguments));
  }

  _createClass(PullDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _pullDown.default)();
    }
  }, {
    key: "render",
    value: function render() {
      var pullWrapperStyle = {
        width: '100%',
        background: '#fff',
        color: '#555',
        zIndex: '10',
        height: '50px',
        textAlign: 'center',
        transition: 'height',
        boxSizing: 'border-box'
      };
      var svgStyle = {
        position: 'absolute',
        bottom: '10px'
      };
      var svgLineStyle = {
        stroke: '#fff',
        strokeWidth: 5,
        fill: '#fff'
      };
      var pullContentStyle = {
        position: 'relative',
        height: '100%',
        overflow: 'hidden'
      };
      return _react.default.createElement("div", {
        id: "pull-down",
        style: pullWrapperStyle
      }, _react.default.createElement("div", {
        style: pullContentStyle
      }, _react.default.createElement("svg", {
        style: svgStyle,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, _react.default.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z"
      }), _react.default.createElement("path", {
        d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
      }))));
    }
  }]);

  return PullDown;
}(_react.Component);

exports.default = PullDown;