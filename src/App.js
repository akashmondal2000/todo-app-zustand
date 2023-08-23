import { useState } from "react";
import useTodoStore from "./TodoStore";

const App=()=> {
  const todos = useTodoStore((state)=>state.todos);
  const addTodo = useTodoStore((state)=>state.addTodo);
  const toggleTodo = useTodoStore((state)=>state.toggleTodo);

  const [newTodoText,setNewTodoText]=useState('');

  const handleAddTodo = ()=>{
    if(newTodoText.trim() !== ''){
      addTodo(newTodoText);
      setNewTodoText('')
    }
  }
  return (
    <div className="App">
    <h1>Zustand todo</h1>

    <input type="text"
    value={newTodoText}
    onChange={(e)=>setNewTodoText(e.target.value)}
     />
     <button onClick={handleAddTodo}>Add Todo</button>

     <ul>
     {todos.map((todo,index)=>(
      <li
      key={index}
      style={{textDecoration:todo.done? "line-through":"none"}}
      onClick={()=>toggleTodo(index)}
      >
      {todo.text}
      </li>
     ))}

     </ul>

    </div>
  );
}

export default App;
