import React, { Component } from 'react'

export default class Todo extends Component { 
    state ={
        input:"",
    }
    changeHandler=(e)=>{
        this.setState({
            input:e.target.value
        })
    }
    submitHandler=(e)=>{
    this.props.addTodo(this.state.input)
    this.setState({
        input:""
    })
    e.preventDefault()
    }

    render() {
        return (
            <div>   
               <form onSubmit={this.submitHandler}>
                <input onChange={this.changeHandler} type="text" value={this.state.input}/>
                <button type="submit">add</button>     
              </form> 
            </div>
        )
    }
}
