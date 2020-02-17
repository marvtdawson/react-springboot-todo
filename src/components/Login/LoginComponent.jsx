import React, { Component } from 'react';

class LoginComponent extends Component {
    render() {
        return (
            <div>
                UserName: <input type ="text" name="username"/>
                Password: <input type ="text" name="password" />
                <button>Login</button>
            </div>
        )
    }
}

export default LoginComponent
