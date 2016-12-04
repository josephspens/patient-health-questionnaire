import React, { Component } from 'react';
import { Paper } from 'material-ui';

import styles from './component.styles';

export default class Thanks extends Component {
  render() {
    return (
      <Paper style={styles.container}>
        <h1>Thank You!</h1>
        <p>We appreciate the time you took to complete the depression questionnaire. If you would like to learn more about mental health, visit the <a href="https://www.mentalhealth.gov/">Department of Health and Human Services</a></p>
      </Paper>
    );
  }
}
