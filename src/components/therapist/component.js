import React, { Component } from 'react';
import { Avatar, Paper, FlatButton } from 'material-ui';

import styles from './component.styles';

export default class Therapist extends Component {
  render() {
    return (
      <Paper style={styles.container}>
        <div
          style={{
            ...styles.avatar,
            backgroundColor: this.props.muiTheme.palette.primary1Color
          }}
        >
          <Avatar
            src={this.props.therapist.avatar}
            size={200}
          />
        </div>
        <div style={styles.content}>
          <h1>{this.props.therapist.name}</h1>
          <p>{this.props.therapist.bio}</p>
        </div>
        <FlatButton
          label='Request A Consult'
          primary={true}
          onClick={() => this.props.requestTherapist()}
          style={styles.requestButton}
        />
      </Paper>
    );
  }
}
