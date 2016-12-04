import React, { Component } from 'react';
import { Avatar, Paper, FlatButton } from 'material-ui';

export default class Therapist extends Component {
  render() {
    return (
      <Paper
        style={{
          width: '20em',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            backgroundColor: this.props.muiTheme.palette.primary1Color,
            padding: '2em'
          }}
        >
          <Avatar
            src='https://placekitten.com/g/200/300'
            size={200}
          />
        </div>
        <div style={{ padding: '0 1em' }}>
          <h1>Person 1</h1>
          <p>Aliquip elit pariatur pariatur sint aliquip qui nisi consequat do do do commodo eu magna. Reprehenderit exercitation officia proident pariatur in reprehenderit fugiat quis incididunt enim esse incididunt laboris ut consequat ullamco et.</p>
        </div>
        <FlatButton
          label="Request A Consult"
          primary={true}
          style={{ width: '100%' }}
        />
      </Paper>
    );
  }
}
