import React, { Component } from 'react';
import Therapist from '../therapist';

export default class Recommendations extends Component {
  render() {
    return (
      <div
        style={{
          padding: '0 10em'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '2em'
          }}
        >
          We would like to recommend a therapist.
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          {this.props.therapists.map(therapist => (
            <Therapist
              key={therapist.id}
              id={therapist.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
