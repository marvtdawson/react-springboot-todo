import React, { Component } from 'react';
import LoginComponent from '../Login/LoginComponent';
import WelcomeComponent from "../Welcome/WelcomeComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                My Todo Application
            </div>
        );
    }
}

export default TodoApp
