import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'normalize-css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './components/app';
import Questionnaire from './components/questionnaire';
import Recommendations from './components/recommendations';
import Thanks from './components/thanks';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={syncHistoryWithStore(browserHistory, store)}>
        <Route path="/" component={App}>
          <IndexRoute component={Questionnaire} />
          <Route path="/recommendations" component={Recommendations} />
          <Route path="/thank-you" component={Thanks} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
