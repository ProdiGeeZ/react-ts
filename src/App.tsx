import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  const todos = [{ id: 't1', text: 'Finish this course.' }]

  return (
    <div className="App">
      <ToDoList items={todos}/>
    </div>
  );
}

export default App;
