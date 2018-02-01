import React, { Component } from 'react';
import './TodoList.css';
import TodoItems from "./TodoItems";

class TodoList extends Component {
    constructor() {
        super()
        this.state = {items: []};
    }
    addItem(e) {
        var itemArray = this.state.items;
        itemArray.push(
                {
                    text: this._inputElement.value,
                    key: Date.now()
                }
            );

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        e.preventDefault();
    }
    render () {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Enter task.">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}
export default TodoList;