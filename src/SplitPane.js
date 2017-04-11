import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from './Pane';
import Resizer from './Resizer';
import PaneType, { paneTypeProperties } from './PaneType';

const styles = {
  display: 'flex',
  width: '100%',
  height: '100%',
};

export default class SplitPane extends Component {

  render() {
    const { children, size, type, isResizing } = this.props;
    if (children.length !== 2) {
      console.warn('Split pane must contain exactly two children');
      return null;
    }
    const {
      flexDirection,
      sizeProp,
      resizeCursor,
    } = paneTypeProperties[type];
    const cursor = isResizing ? resizeCursor : null;
    const paneStyle = {
      ...styles,
      flexDirection,
      ...this.props.paneStyle,
    };
    const pane1Style = {
      [sizeProp]: size,
      cursor,
      order: 1,
      ...this.props.pane1Style,
    };
    const pane2Style = {
      flex: 1,
      cursor,
      order: 3,
      ...this.props.pane2Style,
    };
    return (
      <div
        style={paneStyle}
        className={`SplitPane SplitPane-${type}`}
        ref={this.onRef}
      >
        <Pane
          style={pane1Style}
          className="SplitPane1"
          type={type}
        >
          {children[0]}
        </Pane>
        <Pane
          style={pane2Style}
          className="SplitPane2"
          type={type}
        >
          {children[1]}
        </Pane>
        <Resizer
          style={this.props.resizerStyle}
          className="SplitPaneResizer"
          type={type}
          onMouseDown={this.onMouseDown}
          onTouchStart={this.onTouchStart}
        />
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('touchend', this.onTouchEnd);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('touchmove', this.onTouchMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('touchend', this.onTouchEnd);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('touchmove', this.onTouchMove);
  }

  onRef = r => {
    this.splitPaneRef = r;
  }

  onMouseDown = () => {
    this.props.onResizeStart();
  }

  onMouseMove = e => {
    if (!this.props.isResizing || !this.splitPaneRef) {
      return;
    }
    const { minSize, maxSize } = this.props;
    const boundingRect = this.splitPaneRef.getBoundingClientRect();
    const nextSize = this.props.type === PaneType.vertical
      ? e.clientX - boundingRect.left
      : e.clientY - boundingRect.top;
    if (minSize && nextSize < minSize) {
      return;
    }
    if (maxSize && nextSize > maxSize) {
      return;
    }
    this.props.onChange(Math.max(0, nextSize));
  }

  onMouseUp = () => {
    this.props.onResizeEnd();
  }

  onTouchStart = e => this.onMouseDown(e.touches[0])
  onTouchMove = e => this.onMouseMove(e.touches[0])
  onTouchEnd = e => this.onMouseUp(e.touches[0])

}

SplitPane.defaultProps = {
  type: PaneType.vertical,
};

SplitPane.propTypes = {
  size: PropTypes.number,
  isResizing: PropTypes.bool,
  type: PropTypes.oneOf([
    PaneType.vertical,
    PaneType.horizontal,
  ]),
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  onChange: PropTypes.func,
  onResizeStart: PropTypes.func,
  onResizeEnd: PropTypes.func,
};
