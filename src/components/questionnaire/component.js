import React, { Component } from 'react';
import { Paper, FlatButton } from 'material-ui';

import Screener from '../screener';
import Result from '../result';
import styles from './component.styles';
import propTypes from './component.propTypes';

export default class Questionnaire extends Component {
  static propTypes = propTypes

  render() {
    return (
      <Paper style={styles.container}>
        <Screener />
        {this.props.finished && (
          <div>
            <FlatButton
              label='Finish'
              secondary={true}
              onTouchTap={() => this.props.requiresTherapist ? this.props.goToTherapists() : this.props.goToThankYou()}
              style={styles.requestButton}
            />
          </div>
        )}
        <Result />
      </Paper>
    );
  }
}
