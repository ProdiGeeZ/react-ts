import { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([{ id: 't1', text: 'Finish this course.' }]);

  const handleNewTask = (newTask: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: `${Math.random()}`, text: newTask }
    ]);
  };

  return (
    <div className="App">
      <h1>To Do List!</h1>
      <NewTask handleNewTask={handleNewTask} />
      <ToDoList items={todos} />
    </div>
  );
}

export default App;
