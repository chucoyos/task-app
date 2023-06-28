const Overview = (props) => {
  const {tasks, onDeleteTask} = props
  return(
    <div className='App'>
      <h2>Tasks</h2>
      <ul>
        {
          tasks.map((task) => {
          return <li key={task.id}>
                    Title: {task.title} 
                    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                 </li>})
        }
      </ul>
    </div>
  )
}

export default Overview