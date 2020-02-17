import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

class WelcomeComponent extends Component {

    render() {
        return (
        <div>
            Welcome {this.props.match.params.name} Manage your todos list <Link to="/todos">here</Link>.
        </div>
        )
    }
}

export default WelcomeComponent
