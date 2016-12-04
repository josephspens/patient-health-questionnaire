import React, { Component } from 'react';

import styles from './component.styles';
import propTypes from './component.propTypes';

export default class App extends Component {
  static propTypes = propTypes

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
