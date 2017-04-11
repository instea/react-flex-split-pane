import React, { Component } from 'react';

export default class Pane extends Component {

  render() {
    const paneStyle = {
      overflow: 'hidden',
      ...this.props.style,
    };
    return (
      <div
        style={paneStyle}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    );
  }

}

