const TasksDone = ({tasksDone, onDelete}) => {
    return (
        <div>
            <h1>Task Done</h1>

            <ul>
                {tasksDone.map((task)=> <li className='reminder-false' key={task.id}>{task.serie}, {task.lancamento}
                <button onClick={() => onDelete(task.id)}>x</button></li>)}
            </ul>
        </div>
        )
}
export default TasksDone;