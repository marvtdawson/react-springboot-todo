import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";


class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos:
            [
                {id: 1, description: 'Learn React'},
                {id: 2, description: 'Become A React Expert'},
                {id: 3, description: 'Then Get Paid $6 Figure$'},
                {id: 4, description: 'Then Go To Phase Two Millionaire'},

            ]
        }
    }

    render() {
        return (
            <div className="TodoApp">
                <h1>List Todos</h1>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map (
                            todo =>
                                <tr >
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                            </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListTodosComponent
