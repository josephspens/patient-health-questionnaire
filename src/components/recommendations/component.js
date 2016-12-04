import React, { Component } from 'react';

import Therapist from '../therapist';
import styles from './component.styles';
import propTypes from './component.propTypes';

export default class Recommendations extends Component {
  static propTypes = propTypes

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.hero}>
          We would like to recommend a therapist.
        </h1>
        <div style={styles.list}>
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
