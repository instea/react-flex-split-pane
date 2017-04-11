'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paneTypeProperties;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PaneType = {
  vertical: 'vertical',
  horizontal: 'horizontal'
};

exports.default = PaneType;
var paneTypeProperties = exports.paneTypeProperties = (_paneTypeProperties = {}, _defineProperty(_paneTypeProperties, PaneType.vertical, {
  flexDirection: 'row',
  sizeProp: 'width',
  resizeCursor: 'col-resize',
  resizerBorderBeginProp: 'borderLeft',
  resizerBorderEndProp: 'borderRight',
  resizerMargin: '0 -5px'
}), _defineProperty(_paneTypeProperties, PaneType.horizontal, {
  flexDirection: 'column',
  sizeProp: 'height',
  resizeCursor: 'row-resize',
  resizerBorderBeginProp: 'borderTop',
  resizerBorderEndProp: 'borderBottom',
  resizerMargin: '-5px 0'
}), _paneTypeProperties);