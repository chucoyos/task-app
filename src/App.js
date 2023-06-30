import './App.css';
import { Component, useState } from 'react';
import Overview from './components/Overview'

const App = () => {
  const [task, setTask] = useState({
    id: Date.now(),
    title: ''
  })
  const [tasks, setTasks] = useState([{id: Date.now(), title: 'First Task'}])

  const onTaskChange = (e) => {
    setTask({id: Date.now(), title: e.target.value})
  }
  const onTaskSubmit = (e) => {
    e.preventDefault()
    setTasks([...tasks, task])
    setTask({title: ''})
  }
  const onTaskDelete = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  const onTaskEdit = (id) => {
    const task = tasks.find(task => task.id === id)
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
    setTask(task)
    console.log(task.title)
  }


  return(
    <div className='App'>
      <h1>Task App ✔ ⚂</h1>
      <form onSubmit={onTaskSubmit}>
        <input type='text' value={task.title} onChange={onTaskChange}/>
        <input type='submit' value='✔'/>
      </form>
      <Overview tasks={tasks} 
                onTaskDelete={onTaskDelete}
                onTaskEdit={onTaskEdit} 
      />
    </div>
  )
}
export default App;
