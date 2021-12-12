import React from 'react';

import ToDo from './components/todo/todo';
import SettingProvider from './context/context';
import './app.scss'

export default class App extends React.Component {
  render() {
    return (
      <SettingProvider>
        <ToDo />
      </SettingProvider>
    );
  }
}