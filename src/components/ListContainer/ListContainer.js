import React from "react";
import "./ListContainer.css";
import ListElement from "../ListElement/ListElement";

class ListContainer extends React.Component {
    render() {
        return (
            <div className="tasksList">
                {
                   this.props.taskList.map(task => {
                        return <ListElement     task={task}
                                                key={task.id} /> 
                   }) 
                }
            </div>
        )
    }
}

export default ListContainer;