import NewTasks from './Components/NewTasks';
import TasksOpen from './Components/TasksOpen';
import TasksDone from './Components/TasksDone';
import { useState } from 'react';
import './Components/App.css'

function App() {
    const [series, setLancamentos] = useState([
        {
            id: 1,
            serie: 'A Casa do Dragão',
            lancamento: '21 de Agosto de 2022',
            reminder: false,
        },
        {
            id: 2,
            serie: 'O Senhor dos Anéis: Os Anéis do Poder',
            lancamento: '2 de Setembro de 2022',
            reminder: true,
        },
        {
            id: 3,
            serie: 'Mulher-Hulk: Defensora de Heróis',
            lancamento: '17 de Agosto de 2022',
            reminder: false,
        },
        {
            id: 4,
            serie: 'Primeira Morte',
            lancamento: '10 de Junho de 2022',
            reminder: true,
        },
        {
            id: 5,
            serie: 'O Verão que Mudou Minha Vida',
            lancamento: '17 de Junho de 2022',
            reminder: true,
        },
        {
            id: 6,
            serie: 'Intimidade',
            lancamento: '10 de Junho de 2022',
            reminder: true,
        },
    ]);

    // Deletando afazer
    const deletaTarefa = (id) => {
        setLancamentos(series.filter((task) => task.id !== id));
    };

    // Alterarndo o reminder
    const mudarReminder = (id) => {
        setLancamentos(
            series.map((task) =>
                series.id === id
                    ? { ...series, reminder: !series.reminder }
                    : series
            )
        );
        console.log(id);
    };

    let tasksOpen = series.filter((task) => task.reminder)
    let tasksDone = series.filter((task) => !task.reminder)

    return (
        <div className="container">
            <NewTasks title="Lançamentos de Séries:" />
            {tasksOpen.length > 0 ? (
                <TasksOpen
                    tasksOpen={tasksOpen}
                    onDelete={deletaTarefa}
                    onToggle={mudarReminder}
                />
            ) : (
                'Não há tarefas em aberto.'
            )}

            {tasksDone.length > 0 ? (
                <TasksDone
                    tasksDone={tasksDone}
                    onDelete={deletaTarefa}
                    onToggle={mudarReminder}
                />
            ) : (
                'Não há tarefas em aberto.'
            )}
        </div>
    );
}
export default App;
