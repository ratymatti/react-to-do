import React from "react";
import "./ListElement.css";

class ListElement extends React.Component {
    constructor(props) {
        super(props);

        this.removeTask = this.removeTask.bind(this); 
    }

    removeTask() {
        this.props.onRemove(this.props.task)
    }
    render() {
        return (
            <div className="tasks">
                <div className="text">
                <p>{this.props.task.value}</p>
                </div>
                
                <button onClick={this.removeTask}>x</button>
            </div>
        )
    }
}

export default ListElement;