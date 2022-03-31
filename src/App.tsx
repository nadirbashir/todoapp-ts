import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { ItodoItem } from './todo.model';


const App: React.FC = () =>{
  const [todos, setTodos] = useState<ItodoItem[]>([]);

  const addNewTodo = (text: string) => {
    setTodos(prevState => [...prevState, {id: Math.random().toString(), text: text}]);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo = {addNewTodo} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
