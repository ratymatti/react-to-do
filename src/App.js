import React from 'react';
import './App.css';

import AddElement from './components/AddElement/AddElement';
import ListContainer from './components/ListContainer/ListContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [{id: 0, value: 'testi 1'}, {id: 1, value: 'testi 2'}, {id: 2, value: 'testi 3'},]
    }

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    let tasks = this.state.tasks;

    tasks.push(task);

    this.setState({ tasks: tasks })
  }

  render() {
    return (
      <div className="App">
          <h1>TO-DO App</h1>
          <AddElement />
          <ListContainer taskList={this.state.tasks}/>
      </div>
    );
  }
  
}

export default App;
