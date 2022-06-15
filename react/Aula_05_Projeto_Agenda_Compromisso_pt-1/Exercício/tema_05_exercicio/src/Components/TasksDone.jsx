const TasksDone = ({tasksDone, onDelete}) => {
    return (
        <div>
            <h2>Task Done:</h2>

            <ul>
                {tasksDone.map((task)=> <li className='reminder-false' key={task.id}>{task.serie}, {task.lancamento}
                <button className="button" onClick={() => onDelete(task.id)}>x</button></li>)}
            </ul>
        </div>
        )
}
export default TasksDone;