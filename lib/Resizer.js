'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PaneType = require('./PaneType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BORDER = '5px solid rgba(255, 255, 255, 0)';

var SplitPane = function (_Component) {
  _inherits(SplitPane, _Component);

  function SplitPane() {
    _classCallCheck(this, SplitPane);

    return _possibleConstructorReturn(this, (SplitPane.__proto__ || Object.getPrototypeOf(SplitPane)).apply(this, arguments));
  }

  _createClass(SplitPane, [{
    key: 'render',
    value: function render() {
      var _extends2;

      var _paneTypeProperties$p = _PaneType.paneTypeProperties[this.props.type],
          resizeCursor = _paneTypeProperties$p.resizeCursor,
          resizerBorderBeginProp = _paneTypeProperties$p.resizerBorderBeginProp,
          resizerBorderEndProp = _paneTypeProperties$p.resizerBorderEndProp,
          resizerMargin = _paneTypeProperties$p.resizerMargin;

      var resizerStyle = _extends((_extends2 = {}, _defineProperty(_extends2, resizerBorderBeginProp, BORDER), _defineProperty(_extends2, resizerBorderEndProp, BORDER), _defineProperty(_extends2, 'margin', resizerMargin), _defineProperty(_extends2, 'cursor', resizeCursor), _defineProperty(_extends2, 'order', 2), _extends2), this.props.style);
      return _react2.default.createElement('div', {
        style: resizerStyle,
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onTouchStart
      });
    }
  }]);

  return SplitPane;
}(_react.Component);

exports.default = SplitPane;