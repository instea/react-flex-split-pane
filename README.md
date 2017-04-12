# react-flex-split-pane

Simple split pane component for react.

## Motivation

There are already existing libraries which provides similar functionality however all of them implements split pane using absolute positioning.
Since we needed to implement complex gesture system with non trivial positioning, other libraries didn't work well for us.
This library uses pure css flexbox to position panes and resizer.


## Getting started

Install split pane

```
npm install --save instea/react-flex-split-pane
```

And use it in your application

```javascript
import React, { Component } from 'react';
import SplitPane from 'react-flex-split-pane';

export default class Example extends Component {

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
          <div>Pane 1 content</div>
          <div>Pane 2 content</div>
        </SplitPane>
      </div>
    );
  }
}
```

## API

Split pane works only as controlled component. Here are listed component's props:

| Property | Type | Note |
|----------------|------------|--------|
|`type`          |`Enum`      |Type of split pane - `vertical` or `horizontal`|
|`size`          |`Number`    |Controlled size of first pane (width or height - depends on split pane type)|
|`isResizing`    |`Boolean`   |Controlled property indicating whether user is resizing|
|`onResizeStart` |`Function`  |Event handler called when resizing has initiated|
|`onChange`      |`Function`  |Event handler called when split pane has been resized|
|`onResizeEnd`   |`Function`  |Event handler called when resizing has ended|
|`minSize`       |`Number`    |Minimal size of first pane|
|`maxSize`       |`Number`    |Maximal size of first pane|

## Examples

* [Vertical example](examples/src/examples/VerticalExample.js)
* [Horizontal example](examples/src/examples/HorizontalExample.js)

## Limitations

* Since we use css flexbox, there might be compatibility issues with legacy browsers.
* Component works only in controlled mode

## Contributing

Contributions are welcome! Just open an issues with any idea or pull-request if it is no-brainer.
