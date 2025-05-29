import { useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts';
import { useEffect } from 'react';
import { TodoForm, TodoItem } from './Components';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos((prew) => [{id:Date.now(), ...todo},...prew])
  }

  const updateTodo = (id,todo) => {
    setTodos((prew) => prew.map((prewTodo) => (prewTodo.id === id ?  todo : prewTodo )))
  }

  const deleteTodo = (id) =>{
    setTodos((prew) => prew.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) =>{
    setTodos((prew) => prew.map((prewTodo) => prewTodo.id === id ? {...prewTodo,completed: !prew.completed} : prewTodo))
  }
  useEffect(() =>{
     const todos = JSON.parse(localStorage.getItem("todos"))

     if(todos && todos.length > 0) {
      setTodos(todos)
     }
  },[])
  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo,updateTodo,deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div> 
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
