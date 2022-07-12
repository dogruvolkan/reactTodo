import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from "./components/List";

const initialData = [
  { id: 1234, title: "write your code", isCompleted: true },
  { id: 5678, title: "clean your code", isCompleted: false },
]

function App() {

  const [todos, setTodos] = useState(initialData);
  const [selectedTodo, setSelectedTodo] = useState();

  const handleSave = (title) => {

    if (selectedTodo) {
      const newList = todos.map(todo => {
        if (todo.id === selectedTodo.id) {
          return {
            ...todo,
            title
          }
        }
        return todo;
      });
      setTodos(newList);
    }
    else {
      const newTodo = {
        id: Date.now(),
        title,
        isCompleted: false
      }

      setTodos([...todos, newTodo]);
    }


  }

  const handleCompleted = (id) => {
    const newList = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    });
    setTodos(newList);
  };


  const handleDelete = (id) => {
    const newList = todos.filter(todo => todo.id != id);
    setTodos(newList);
  }



  return (
    <div className='anaDiv '>
      <Form onSave={handleSave} onCancel={() => setSelectedTodo(undefined)} selectedTitle={selectedTodo?.title} />
      <List onCompleted={handleCompleted} onDelete={handleDelete} onSelect={setSelectedTodo} todos={todos} />
    </div>
  )
}

export default App