import React from 'react';
import './App.css';

import AddElement from './components/AddElement/AddElement';
import ListContainer from './components/ListContainer/ListContainer';
import Date from './components/Date/Date';
import getDate from './components/GetDate/GetDate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  addTask(task) {
    if (task) {
      let tasks = this.state.tasks;

      tasks.push({id: (getDate()), value: task});

      this.setState({ ...this.state, tasks: tasks })
    }
  }

  removeTask(task) {
    let tasksToRemovedFrom = this.state.tasks;

    tasksToRemovedFrom = tasksToRemovedFrom.filter(currentTask => currentTask.id !== task.id);

    this.setState({ ...this.state, tasks: tasksToRemovedFrom});
  }

  removeAll() {
    this.setState({ ...this.state, tasks: [] });
  }

  render() {
    return (
      <div className="App">
          <div className="header">
             <Date />
            <h1>STUFF TO DO</h1>
          </div>
          <AddElement onAdd={this.addTask} />
          <ListContainer  taskList={this.state.tasks}
                          onRemove={this.removeTask}
                          removeAll={this.removeAll} />
      </div>
    );
  }
  
}

export default App;
