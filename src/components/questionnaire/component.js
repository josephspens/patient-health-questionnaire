import React, { Component } from 'react';
import { Paper, FlatButton } from 'material-ui';

import Screener from '../screener';
import Result from '../result';

export default class Questionnaire extends Component {
  render() {
    return (
      <Paper
        style={{
          width: '55em',
          margin: '0 auto'
        }}
      >
        <Screener />
        {this.props.finished && (
          <div>
            <FlatButton
              label='Finish'
              secondary={true}
              onTouchTap={() => {}}
              style={{
                margin: '2em 5em',
                width: 'calc(100% - 10em)'
              }}
            />
          </div>
        )}
        <Result />
      </Paper>
    );
  }
}
