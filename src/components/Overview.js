const Overview = (props) => {
  const {tasks, onTaskDestroy, onTaskEdit} = props
  return(
    <div>
      <h2>Tasks</h2>
      <ol>
        {
          tasks.map(task => {
            return(
              <li key={task.id}>
                {task.title} 
                <button onClick={() => onTaskDestroy(task.id)}>
                  Delete Task
                </button>
                <button onClick={() => onTaskEdit(task.id)}>
                  Edit Task
                </button>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default Overview