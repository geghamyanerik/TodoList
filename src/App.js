import {useState, useReducer} from "react";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import "./App.css";

import TodoList from "./TodoList";



function App() {
  

  const [todos, setTodos] = useState( [
    {
      id: Math.random(),
      text: "Սովորել JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Սովորել CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Սովորել React",
      isCompleted: false
    }
  ]);
  
  return (

    <div className="App">
      <h1> TodoList</h1>
      <TodoForm 
   
        onAdd={(text)=>{
          setTodos([
            ...todos,
            {
              id:Math.random(),
              text:text,
             isCompleted: false

            }
          ]);

        }}
      />
      <TodoList todos={todos} 

      onDelete={(todo)=> {
        setTodos(todos.filter((t)=> t.id !== todo.id));
      }
    }
        
         
        onChange={(newTodo)=>{
         setTodos(todos.map((todo)=>{
            if(todo.id === newTodo.id){
              return newTodo
            }
            return todo;
          })

         )}}
      
      />                          
      <TodoFooter todos={todos} onClearComponet={()=>{
         
        setTodos(todos.filter((todo)=>  !todo.isCompleted));
         
      }}
  
      />
     </div>

  );
 
}

export default App;









