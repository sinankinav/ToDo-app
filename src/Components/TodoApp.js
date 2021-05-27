import React, { Component } from 'react'
import Todo from './Todo'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

export default class TodoApp extends Component {
    state = {
        tasks: [
            { id: 1, name: "task2", done: false },
            { id: 2, name: "task3", done: false }
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
    removeTodo= (name)=>{
    const filtered = this.state.tasks.filter(task=>task.name!==name)
    this.setState({
        tasks:filtered
    })


    }
    cizTodo=(name)=>{
        const yeni = this.state.tasks.map(task=>{
            if(task.name=== name){
                task.done =!task.done
            }
            return task
        })
       this.setState({
        task:yeni,
       }) 
    }
    render() {
        return (
            <div>
                <Todo addTodo={this.addTodo}/>
                <TodoList cizTodo={this.cizTodo} removeTodo={this.removeTodo} tasks={this.state.tasks} />
            </div>
        )
    }
}
