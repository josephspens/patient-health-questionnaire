import React, { Component } from 'react';
import { Avatar, Paper, FlatButton } from 'material-ui';

export default class Therapist extends Component {
  render() {
    return (
      <Paper
        style={{
          width: '20em',
          textAlign: 'center',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            backgroundColor: this.props.muiTheme.palette.primary1Color,
            padding: '2em'
          }}
        >
          <Avatar
            src={this.props.avatar}
            size={200}
          />
        </div>
        <div style={{
          padding: '0 1em',
          flexGrow: 1
        }}>
          <h1>{this.props.name}</h1>
          <p>{this.props.bio}</p>
        </div>
        <FlatButton
          label='Request A Consult'
          primary={true}
          onClick={() => this.props.requestTherapist()}
          style={{ width: '100%' }}
        />
      </Paper>
    );
  }
}
