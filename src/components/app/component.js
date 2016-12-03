import React, { Component } from 'react';
import { Paper } from 'material-ui';

import Screener from '../screener';

export default class App extends Component {
  render() {
    return (
      <Paper
        style={{
          width: '40em',
          margin: '10em auto'
        }}
      >
        <Screener />
      </Paper>
    );
  }
}
