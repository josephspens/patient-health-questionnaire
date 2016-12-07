import React, { Component } from 'react';
import { Link } from 'react-router';
import { Paper } from 'material-ui';

import styles from './component.styles';

export default class NotFound extends Component {
  render() {
    return (
      <Paper style={styles.container}>
        <h1>Not Found</h1>
        <p>It doesn't seem this URI goes anywhere. Try going back <Link to='/'>home</Link></p>
      </Paper>
    );
  }
}
