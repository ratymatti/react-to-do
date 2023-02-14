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
                <p>{this.props.task.value}</p>
                <button onClick={this.removeTask}>-</button>
            </div>
        )
    }
}

export default ListElement;