import React, { Component } from 'react';

import styles from './component.styles';

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          ...styles.container,
          backgroundColor: this.props.muiTheme.palette.accent2Color
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
