import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './component';

const props = {
  muiTheme: {
    palette: {
      accent2Color: '#ccc'
    }
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<App {...props} />, div);
});
