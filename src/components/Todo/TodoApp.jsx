import React, { Component } from 'react';
import LoginComponent from '../Login/LoginComponent';
import WelcomeComponent from "../Welcome/WelcomeComponent";


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                My Todo Application
                <LoginComponent />
                <WelcomeComponent />
            </div>
        );
    }
}

export default TodoApp
