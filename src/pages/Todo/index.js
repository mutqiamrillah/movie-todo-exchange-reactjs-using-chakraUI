import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTodos } from "action/todos"
import { Navigation } from 'ui-kit'
import React from "react";
import { Input, Button } from "@chakra-ui/react"


function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  console.log('gettos ',getTodos())

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form style={{textAlign: 'center'}} onSubmit={handleSubmit}> 
    <Input value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" size="sm" style={{width: '20%'}} />
    <Button colorScheme="teal" size="sm" type="submit">Submit</Button>
  </form>
  );
}

function Todos({ todosList }) {
  const [todos, setTodos] = useState(todosList)

  useEffect(() => {
    setTodos(todosList)
  }, [todosList])
  
  const addTodo = email => {
      const newTodos = [...todos, { email }];
      setTodos(newTodos);
  };
  
  const setMarkTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isDone = true;
      setTodos(newTodos);
  };

  const setRemoveTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        
          <FormTodo addTodo={addTodo} />
          <table style={{marginLeft: 'auto',marginRight: 'auto'}}>
              {todos.map((todo, index) => (
                  <tr key = {index}>
                      <td style={{ 
                        textDecoration: todo.isDone ? "line-through" : "",
                        backgroundColor: todo.isDone ? "aquamarine" : "",
                        width: '90%' 
                        }}>{todo.email}</td>
                      <td><button onClick={() => setMarkTodo(index)}>✓</button>{' '}</td>
                      <td><button onClick={() => setRemoveTodo(index)}>✕</button></td>
                  </tr>
              ))}
          </table>

      </header>
    </div>
  )
}

function TodosPage() {
  const todosList = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return <Todos todosList={todosList} />
}

export default TodosPage
