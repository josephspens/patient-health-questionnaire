import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          padding: '5em 0',
          backgroundColor: this.props.muiTheme.palette.accent2Color,
          minHeight: '100%',
          boxSizing: 'border-box'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
