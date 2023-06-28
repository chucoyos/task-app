const Overview = (props) => {
  const {tasks} = props
  return(
    <div className='App'>
      <h2>Tasks</h2>
      <ul>
        {
          tasks.map((task) => <li key={task.id}>{task.title}</li>)
        }
      </ul>
    </div>
  )
}

export default Overview