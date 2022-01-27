import TodoListStatefull from "./aula-1/parte-2/TodoListStatefull"
import TodoListStateless from "./aula-1/parte-2/TodoListStateless";
import TodoListFunctional from "./aula-1/parte-2/TodoListFunctional";

import './App.css';

const items = [
    'Feijão',
    'Abacate',
    'Abobrinha'
]

function App() {
  return (
    <div className="App">
      <TodoListStatefull />
      <TodoListStateless items={items}/>
      <TodoListFunctional />
    </div>
  );
}

export default App;
