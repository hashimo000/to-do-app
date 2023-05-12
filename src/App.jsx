
import React, { useState } from "react";

export const App=()=> {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("期限なし");
  const[sortBy,setSortBY] =useState("dueDate");
  
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
      <h1>TODOアプリ</h1>
      
      <button onClick={sortTodos}>ソートする</button>
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
