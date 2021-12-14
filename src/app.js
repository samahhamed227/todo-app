import React from 'react';
import SettingContext from './context/context';
import Header from './components/header';
import ToDo from './components/todo/todo';
// import './app.scss';
import Setting from './components/setting';
import Login from './components/login';
import LoginContext from './context/logincontext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <>

        <LoginContext>
        <Login/>
          <SettingContext>
            <Header/>
            <ToDo />
          </SettingContext>

        </LoginContext>






      </>

    );

  }
}
