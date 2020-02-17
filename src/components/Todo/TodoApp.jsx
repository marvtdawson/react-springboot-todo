import React, { Component } from 'react';
import LoginComponent from '../Login/LoginComponent';


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                My Todo Application
                <LoginComponent />
            </div>
        );
    }
}

export default TodoApp
