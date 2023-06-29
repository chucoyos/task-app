import './App.css';
import { Component } from 'react';
import Overview from './components/Overview'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      task: {
        id: Date.now(),
        title: ''
      }
    }
  }

  onTaskChange = (e) => {
    const {task} = this.state
    task.title = e.target.value
    task.id = Date.now()
    this.setState({task: task})
  }
  onTaskSubmit = (e) => {
    const {tasks, task} = this.state
    e.preventDefault()
    this.setState({tasks: [...tasks, task], task: {title: ''}})
  }

  onTaskDestroy = (id) => {
    const {tasks} = this.state
    const filteredTasks = tasks.filter(task => task.id !== id)
    this.setState({tasks: filteredTasks})
  }

  onTaskEdit = (id) => {
    const {tasks} = this.state
    const task = tasks.find(task => task.id === id)
    const filteredTasks = tasks.filter(task => task.id !== id)
    this.setState({tasks: filteredTasks, task: task})
  }

  render() {
    const {task, tasks} = this.state
    return(
      <div className='App'>
        <h1>Task App</h1>
        <form onSubmit={this.onTaskSubmit}>
          <input type='text' value={task.title} onChange={this.onTaskChange}/>
          <input type='submit' value='Create Task'/>
        </form>
        <Overview 
          tasks={tasks} 
          onTaskDestroy={this.onTaskDestroy} 
          onTaskEdit={this.onTaskEdit} />
      </div>
    )
  }
}

export default App;
