import { useState } from 'react';
import './App.css'
import Todo from './components/TaskList'; 
import TodoForm from './components/TaskApp';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Enviar esse projeto p Sandrinha",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Passear com o Bold",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Criar anúncio produto",
      category: "Trabalho",
      isCompleted: false,
    }
  ]);

  const [filter, setFilter] = useState("All")
  
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
    todo.id !== id ? todo : null)
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <>
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <Filter filter={filter} setFilter={setFilter} />
        <div className="todo-list">
          {todos
          .filter((todo) =>
            filter === "All"
            ? true
            : filter === "Completed"
            ? todo.isCompleted
            : !todo.isCompleted
          )
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
      </div>

    </>
  )
}

export default App
