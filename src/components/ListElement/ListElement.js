import React from "react";
import "./ListElement.css";

class ListElement extends React.Component {
    render() {
        return (
            <div className="tasks">
                <p>{this.props.task.value}</p>
                <button>-</button>
            </div>
        )
    }
}

export default ListElement;