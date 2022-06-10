const TasksOpen = ({tasksOpen, onDelete}) => {
    return (
        <div>
            <h1>Task Open</h1>

            <ul>
                {tasksOpen.map((task)=> <li className='reminder-true' key={task.id}>{task.serie}, {task.lancamento} <button onClick={() => onDelete(task.id)}>x</button></li>)}
            </ul>
        </div>
        )
}

export default TasksOpen;