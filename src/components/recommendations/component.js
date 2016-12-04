import React, { Component } from 'react';
import Therapist from '../therapist';

export default class Recommendations extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '0 10em'
        }}
      >
        <Therapist />
        <Therapist />
        <Therapist />
      </div>
    );
  }
}
