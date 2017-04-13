import React, { Component } from 'react';
import SplitPane from 'react-flex-split-pane';

export default class VerticalExample extends Component {

  state = { size: 150, isResizing: false };

  onResizeStart = () => this.setState({ isResizing: true })
  onResizeEnd = () => this.setState({ isResizing: false })
  onChange = size => this.setState({ size })

  render() {
    return (
      <div style={{ height: 300, width: 500 }}>
        <SplitPane
          type="vertical"
          size={this.state.size}
          isResizing={this.state.isResizing}
          onResizeStart={this.onResizeStart}
          onResizeEnd={this.onResizeEnd}
          onChange={this.onChange}
          paneStyle={{ border: '1px solid silver' }}
          pane1Style={{ borderRight: '1px solid silver' }}
        >
          <div style={{ backgroundColor: '#D4ED91', width: '100%', height: '100%' }} />
          <div style={{ backgroundColor: '#FBA16C', width: '100%', height: '100%' }} />
        </SplitPane>
      </div>
    );
  }
}
