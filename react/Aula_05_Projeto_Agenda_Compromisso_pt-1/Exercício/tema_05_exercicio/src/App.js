import NewTasks from "./Components/NewTasks";
import TasksOpen from "./Components/TasksOpen"
import { useState } from 'react';

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
      reminder: false,
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
      reminder: false,
    },
    {
      id: 5,
      serie: 'O Verão que Mudou Minha Vida',
      lancamento: '17 de Junho de 2022',
      reminder: false,
    },
    {
      id: 6,
      serie: 'Intimidade',
      lancamento: '10 de Junho de 2022',
      reminder: false,
    },
  ]);

  // Deletando afazer
  const deletaTarefa = (id) => {
    setLancamentos(serie.filter((task) => task.id !== id));
  };

  // Alterarndo o reminder 
  const mudarReminder = (id) => {
    setLancamentos(
      series.map((task) =>
        series.id === id ? { ...series, reminder: !series.reminder } : series
      )
    );
    console.log(id);
  };

  return (
    <div className="container">
      <NewTasks title="Lançamentos de Séries:" />
      {series.length > 0 ? (
        <TasksOpen series={series}
          onDelete={deletaTarefa}
          onToggle={mudarReminder} />
      ) : (
        'Não há tarefas em aberto.'
      )}
    </div>
  );
}
export default App;
