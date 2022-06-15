const TasksOpen = ({tasksOpen, onDelete}) => {
    return (
        <div>
            <h2>Task Open:</h2>

            <ul>
                {tasksOpen.map((task)=> <li className='reminder-true' key={task.id}>{task.serie}, {task.lancamento}
                <button className="button" onClick={() => onDelete(task.id)}>x</button></li>)}
            </ul>
        </div>
        )
}

export default TasksOpen;