
import React, { useState } from "react";

export const App=()=> {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("期限なし");
  
  const AddTodo = () => {
    if (todoInput !== "") {
      if (dueDateInput!==""){
        setTodos([...todos,{task:todoInput,dueDate:dueDateInput}])
      }
      else setTodos([...todos, { task: todoInput,  dueDate:dueDateInput}]);
      setTodoInput("");
      
      setDueDateInput("");
      
    }
  };
  const DeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

 

  return (
    <div className="App">
      <h1>TODOアプリ</h1>
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
       <button onClick={AddTodo}>追加</button>
       <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task} - 期限: {todo.dueDate}
            <button onClick={() => DeleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
