const Overview = (props) => {
  const {tasks, onTaskDelete, onTaskEdit} = props
  return(
    <div>
      <h2>Tasks</h2>
      <ol>
        {
          tasks.map((task) => {
            return(
              <li key={task.id}>
                {task.title}
                <button onClick={() => onTaskDelete(task.id)}>Delete</button>
                <button onClick={() => onTaskEdit(task.id)}>Edit</button>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default Overview