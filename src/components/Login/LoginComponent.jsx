import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        // add state
        this.state = {
            username: 'marvtdawson72',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };
        // bind to individual input control elements
            // this.handleUsernameChange = this.handleUsernameChange.bind(this);
            // this.handlePasswordChange = this.handlePasswordChange.bind(this);

        // bind to multiple form input control elements using one method = handleChange
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    handleChange(event) {
        // console.log(this.state);
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

    loginClicked() {
        // marvtdawson72 = username
        // password = abc123
        if(this.state.username==='marvtdawson72' && this.state.password==='abc123') {
            console.log('Successful');
            this.setState({showSuccessMessage: true});
            this.setState({hasLoginFailed:false});
        } else {
            // console.log('Failed');
            this.setState({showSuccessMessage:false});
            this.setState({hasLoginFailed:true})
        }
    }

    // add event to username input control elements
    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState(
    //         {[event.target.name]:event.target.value}
    //         )
    // };

    // add event to password input control elements
    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // };

    render() {
        return (
            <div>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/*<ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}/>*/}
                UserName: <input type ="text"
                                 name="username"
                                 value={this.state.username}
                                 onChange={this.handleChange} />
                Password: <input type ="text"
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }
// function ShowLoginSuccess(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default LoginComponent
