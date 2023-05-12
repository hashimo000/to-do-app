
import React, { useState } from "react";

export const App=()=> {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
 
  const handleAddTodo = () => {
    if (todoInput !== "") {
      setTodos([...todos, { task: todoInput,  }]);
      setTodoInput("");
      
    }
  };

 

  return (
    <div className="App">
      <h1>TODOアプリ</h1>
      <input
        type="text"
        placeholder="タスクを入力してください"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
       <button onClick={handleAddTodo}>追加</button>
      
      
    </div>
  );
}

export default App;
