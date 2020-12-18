import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import ListTodosComponent from "./components/Todo/ListTodosComponent";
import LoginComponent from "./components/Login/LoginComponent";
import WelcomeComponent from "./components/Welcome/WelcomeComponent";
import ErrorComponent from "./components/Error/ErrorComponent";
import FooterComponent from "./components/Layout/Footer/Footer";
import HeaderComponent from "./components/Layout/Header/HeaderComponent";

function App() {
  return (
    <div className="App">

        <Router>
            <>
                <HeaderComponent />
                <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/todos" component={ListTodosComponent}/>
                    <Route path="/welcome/:name" component={WelcomeComponent}/>
                    <Route path="" component={ErrorComponent} />
                </Switch>
                <FooterComponent />
            </>
        </Router>
    </div>
  );
}

export default App;
