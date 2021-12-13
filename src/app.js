import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import ToDo from './components/todo/todo.js';
import SettingProvider from './context/context';
import Headers from './components/header';
import Settings from './components/setting';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

export default class App extends React.Component {
  render() {
    return (
      <SettingProvider>
        <Router>
          <Switch>
              <Route exact path='/settings' >
                <Settings/>
              </Route>
              <Route exact path='/'>
                <ToDo />
              </Route>
          </Switch>
        </Router>
      </SettingProvider>
    );
  }
}