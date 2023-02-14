import React from "react";
import "./AddElement.css";

class AddElement extends React.Component {
    render() {
        return (
            <div className="addTasks">
                <input placeholder="Add new task"></input>
            </div>
        )
    }
}

export default AddElement;