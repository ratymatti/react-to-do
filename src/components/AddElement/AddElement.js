import React from "react";
import "./AddElement.css";

class AddElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskToAdd: ''
        }
        
        this.addNewTask = this.addNewTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addNewTask() {
        this.props.onAdd(this.state.taskToAdd);
    }

    handleChange(event) {
        this.setState({ taskToAdd: event.target.value });
    }

    render() {
        return (
            <div className="addTasks">
                <input onSubmit={this.handleChange} onChange={this.handleChange} placeholder="Add new task"></input>
                <button onClick={this.addNewTask} className="addButton">Add task</button>
            </div>
        )
    }
}

export default AddElement;