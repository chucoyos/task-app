import './App.css';
import { Component } from 'react';
import Overview from './components/Overview'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: {
        title: '',
        id: Date.now()
      },
      tasks: []
    }
  }

  onTaskChange = (e) => {
    const {task} = this.state
    this.setState({
      task: {
        id: Date.now(),
        title: e.target.value
      }
    })
  }

  onTaskSubmit = (e) => {
    const {tasks, task} = this.state
    e.preventDefault()
    if(task.title !== ''){
      this.setState(
        {tasks: [...tasks, task],
        task: {title: ''}}
        )
    }
  }

  render() {
    const {task, tasks} = this.state
    return(
      <div className='App'>
        <h1>Task App</h1>
        <form onSubmit={this.onTaskSubmit}>
          <input type='text' value={task.title} onChange={this.onTaskChange}/>
          <input type='submit' value='New Task'/>
        </form>
        <Overview tasks={tasks}/>
      </div>
    )
  }
}

export default App;
