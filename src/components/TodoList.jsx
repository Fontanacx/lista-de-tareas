import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";

const TodoList = ({ darkMode }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newDate, setNewDate] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { 
        id: Date.now(), 
        text: newTodo, 
        completed: false,
        date: newDate
      }]);
      setNewTodo('');
      setNewDate('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nueva tarea..."
          className="w-full mb-2 sm:mb-0 sm:mr-2 px-3 py-2 border rounded"
        />
        <div className="flex">
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="mr-2 px-3 py-2 border rounded"
          />
          <button 
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <PlusCircle className="inline-block mr-2 h-4 w-4" /> Agregar
          </button>
        </div>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
              {todo.date && <span className="ml-2 text-sm text-gray-500">({todo.date})</span>}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;