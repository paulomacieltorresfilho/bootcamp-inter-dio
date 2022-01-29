import TodoListStatefull from "./aula-1/parte-1/TodoListStatefull"
import TodoListStateless from "./aula-1/parte-1/TodoListStateless";
import TodoListFunctional from "./aula-1/parte-1/TodoListFunctional";
import NameForm from "./aula-1/parte-2/NameForm";
import SorveteForm from "./aula-1/parte-2/SorveteForm";
import FileInput from "./aula-1/parte-2/FileInput";

import './App.css';

const TodoLists = () => {
  
  const items = [
      'Feijão',
      'Abacate',
      'Abobrinha'
  ]
  
  return (
    <div>
      <TodoListStatefull />
      <TodoListStateless items={items}/>
      <TodoListFunctional />
    </div>
  )
}

const Forms = (
    <div>
      <NameForm />
      <SorveteForm />
      <FileInput />
    </div>
);


const options = {
  todoList: TodoLists,
  forms: Forms
}


function App() {
  return (
    <div className="App">
      {options.forms}
    </div>
  );
}

export default App;
