import React, { Component } from 'react';
import { Paper } from 'material-ui';

export default class App extends Component {
  render() {
    return (
      <Paper
        style={{
          width: '40em',
          margin: '0 auto',
          padding: '3em',
          textAlign: 'center'
        }}
      >
        <h1>Thank You!</h1>
        <p>We appreciate the time you took to complete the depression questionnaire. If you would like to learn more about mental health, visit the <a href="https://www.mentalhealth.gov/">Department of Health and Human Services</a></p>
      </Paper>
    );
  }
}
