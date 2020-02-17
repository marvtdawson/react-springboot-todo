import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ListTodosComponent from "./components/Todo/ListTodosComponent";
import LoginComponent from "./components/Login/LoginComponent";
import WelcomeComponent from "./components/Welcome/WelcomeComponent";
import ErrorComponent from "./components/Error/ErrorComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Router>
            <>
                <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/todos" component={ListTodosComponent}/>
                    <Route path="/welcome/:name" component={WelcomeComponent}/>
                    <Route path="" component={ErrorComponent} />
                </Switch>
            </>
        </Router>
    </div>
  );
}

export default App;
