import React, { Component } from 'react';
import { Paper } from 'material-ui';

import Screener from '../screener';

export default class App extends Component {
  render() {
    return (
      <Paper
        style={{
          width: '55em',
          margin: '5em auto',
          padding: '2em'
        }}
      >
        <Screener />
      </Paper>
    );
  }
}
