import "./index.css";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';



export const App=()=> {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("期限なし");
  const[sortBy,] =useState("dueDate");
  
  const sortAraay=(array,sortBy)=>{
    return array.sort((a,b)=>{
      if(a[sortBy]<b[sortBy]){
        return -1;
      };
      if (a[sortBy]>b[sortBy])
      return 1;
      else
      return 0;
      
    })
  }

  const AddTodo = () => {
    if (todoInput !== "") {
      let dueDate = dueDateInput !== "" ? dueDateInput : "期限なし";
    setTodos([...todos, { task: todoInput,  dueDate }]);
    setTodoInput("");
    setDueDateInput("");
      
    }
  };
  const DeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const sortTodos = () => {
    const sortedTodos = sortAraay([...todos], sortBy);
    setTodos(sortedTodos);
  };


  return (
    
    <div className="App">
      <header>TODOアプリ</header>
      
      <br></br><Button variant="outline-primary" onClick={sortTodos}>整理</Button>
      <input
        type="text"
        placeholder="タスクを入力してください"
        value={todoInput}
        onChange={(a) => setTodoInput(a.target.value)}
      />
      <input
        type="date"
        placeholder="期限を入力してください"
        value={dueDateInput}
        onChange={(a) => setDueDateInput(a.target.value)}
      />
       <Button variant="outline-primary" onClick={AddTodo}>追加</Button>{""}
       <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task} - 期限: {todo.dueDate}
            <Button variant="outline-warning" onClick={() => DeleteTodo(index)}>削除</Button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
