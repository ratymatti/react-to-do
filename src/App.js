import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
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
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>  
        
      </div>
    );
  }
  
}

export default App;
