
import React, { useState } from "react";

export const App=()=> {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("");
  const handleAddTodo = () => {
    if (todoInput !== "") {
      setTodos([...todos, { task: todoInput,  }]);
      setTodoInput("");
      setDueDateInput("");
      
    }
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
       <button onClick={handleAddTodo}>追加</button>
      
      
    </div>
  );
}

export default App;
