import React from "react";
import "./ListContainer.css";
import ListElement from "../ListElement/ListElement";

class ListContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.taskList.length !== 0 && <div className="tasksList">
                    {
                    this.props.taskList.map(task => {
                            return <ListElement     task={task}
                                                    key={task.id}
                                                    onRemove={this.props.onRemove} /> 
                    }) 
                    }
                </div>}
            </div>    
        )
    }
}

export default ListContainer;