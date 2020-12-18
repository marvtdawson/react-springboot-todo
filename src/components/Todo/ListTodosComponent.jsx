import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";


class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos:
            [
                {id: 1, description: 'Learn React', done:false, targetDate: new Date()},
                {id: 2, description: 'Become A React Expert', done:false, targetDate: new Date()},
                {id: 3, description: 'Then Get Paid $6 Figure$', done:false, targetDate: new Date()},
                {id: 4, description: 'Then Go To Phase Two Millionaire', done:false, targetDate: new Date()},

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
                        <th>Todo Id</th>
                        <th>Todo Description</th>
                        <th>Is Todo Completed</th>
                        <th>Current Completion Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map (
                            todo =>
                                <tr >
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
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
