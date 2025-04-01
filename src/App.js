import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefaTemp, setTarefaTemp] = useState([])

  function cadastrarTarefa() {
    setTarefas([...tarefas, tarefaTemp])
    setTarefaTemp('')
  }

  return (
    <div className="App">
      <input data-testid='campo-add' type='text' value={tarefaTemp} onChange={({ target: { value } }) => setTarefaTemp(value)} />
      <button data-testid='btn-cadastrar' type='button' onClick={cadastrarTarefa}>cadastrar</button>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
