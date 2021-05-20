import React, { Component } from 'react'
import Todo from './Todo'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

export default class TodoApp extends Component {
    state = {
        tasks: [
            { id: 1, name: "task1", done: false },
            { id: 2, name: "task2", done: false }
        ]
    }
    addTodo = (newİnput) => {
        if (newİnput === "") {
            alert("task girmeyi unuttunuz!")
        } else if (this.state.tasks.find(task => task.name === newİnput)) {
            alert("bunu daha önce girmiştiniz")
        } else {
            const newTask = {
                id: uuidv4(),
                name: newİnput,
                done: false

            }
            this.setState({ tasks: [...this.state.tasks, newTask] })
        }
    }
    render() {
        return (
            <div>
                <Todo addTodo={this.addTodo}/>
                <TodoList tasks={this.state.tasks} />
            </div>
        )
    }
}
