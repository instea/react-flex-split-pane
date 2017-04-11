'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Resizer = require('./Resizer');

var _Resizer2 = _interopRequireDefault(_Resizer);

var _PaneType = require('./PaneType');

var _PaneType2 = _interopRequireDefault(_PaneType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  display: 'flex',
  width: '100%',
  height: '100%'
};

var SplitPane = function (_Component) {
  _inherits(SplitPane, _Component);

  function SplitPane() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SplitPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SplitPane.__proto__ || Object.getPrototypeOf(SplitPane)).call.apply(_ref, [this].concat(args))), _this), _this.onRef = function (r) {
      _this.splitPaneRef = r;
    }, _this.onMouseDown = function () {
      _this.props.onResizeStart();
    }, _this.onMouseMove = function (e) {
      if (!_this.props.isResizing || !_this.splitPaneRef) {
        return;
      }
      var _this$props = _this.props,
          minSize = _this$props.minSize,
          maxSize = _this$props.maxSize;

      var boundingRect = _this.splitPaneRef.getBoundingClientRect();
      var nextSize = _this.props.type === _PaneType2.default.vertical ? e.clientX - boundingRect.left : e.clientY - boundingRect.top;
      if (minSize && nextSize < minSize) {
        return;
      }
      if (maxSize && nextSize > maxSize) {
        return;
      }
      _this.props.onChange(Math.max(0, nextSize));
    }, _this.onMouseUp = function () {
      _this.props.onResizeEnd();
    }, _this.onTouchStart = function (e) {
      return _this.onMouseDown(e.touches[0]);
    }, _this.onTouchMove = function (e) {
      return _this.onMouseMove(e.touches[0]);
    }, _this.onTouchEnd = function (e) {
      return _this.onMouseUp(e.touches[0]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SplitPane, [{
    key: 'render',
    value: function render() {
      var _extends2;

      var _props = this.props,
          children = _props.children,
          size = _props.size,
          type = _props.type,
          isResizing = _props.isResizing;

      if (children.length !== 2) {
        console.warn('Split pane must contain exactly two children');
        return null;
      }
      var _paneTypeProperties$t = _PaneType.paneTypeProperties[type],
          flexDirection = _paneTypeProperties$t.flexDirection,
          sizeProp = _paneTypeProperties$t.sizeProp,
          resizeCursor = _paneTypeProperties$t.resizeCursor;

      var cursor = isResizing ? resizeCursor : null;
      var paneStyle = _extends({}, styles, {
        flexDirection: flexDirection
      }, this.props.paneStyle);
      var pane1Style = _extends((_extends2 = {}, _defineProperty(_extends2, sizeProp, size), _defineProperty(_extends2, 'cursor', cursor), _defineProperty(_extends2, 'order', 1), _extends2), this.props.pane1Style);
      var pane2Style = _extends({
        flex: 1,
        cursor: cursor,
        order: 3
      }, this.props.pane2Style);
      return _react2.default.createElement(
        'div',
        {
          style: paneStyle,
          className: 'SplitPane SplitPane-' + type,
          ref: this.onRef
        },
        _react2.default.createElement(
          _Pane2.default,
          {
            style: pane1Style,
            className: 'SplitPane1',
            type: type
          },
          children[0]
        ),
        _react2.default.createElement(
          _Pane2.default,
          {
            style: pane2Style,
            className: 'SplitPane2',
            type: type
          },
          children[1]
        ),
        _react2.default.createElement(_Resizer2.default, {
          style: this.props.resizerStyle,
          className: 'SplitPaneResizer',
          type: type,
          onMouseDown: this.onMouseDown,
          onTouchStart: this.onTouchStart
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('touchend', this.onTouchEnd);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('touchmove', this.onTouchMove);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('touchend', this.onTouchEnd);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
    }
  }]);

  return SplitPane;
}(_react.Component);

exports.default = SplitPane;


var fn = function fn() {
  return 0;
};

SplitPane.defaultProps = {
  type: _PaneType2.default.vertical,
  onChange: fn,
  onResizeStart: fn,
  onResizeEnd: fn
};

SplitPane.propTypes = {
  size: _propTypes2.default.number,
  isResizing: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf([_PaneType2.default.vertical, _PaneType2.default.horizontal]),
  minSize: _propTypes2.default.number,
  maxSize: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  onResizeStart: _propTypes2.default.func,
  onResizeEnd: _propTypes2.default.func
};