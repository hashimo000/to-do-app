import React ,{useState}from "react";
import "./index.css";

export const App =()=>{
  const [todoText,setTodoText] =useState("");
  const [incompleteTodos, setIncompleteTodos]=useState(["aaa","iii"]);

  const[completeTodos,setCompleteTodos]=useState(["uuu"]);

  const onChangeTodoText =(event)=> setTodoText(event.target.value)

  const onClickAdd=()=>{
    const newTodos=[...incompleteTodos,todoText];
    setIncompleteTodos(newTodos)
  }

  return (
  <>
    <div className="input-area">
      <input placrholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
      <button onClick={onClickAdd}> 追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo)=>{
          return(
            
            <div className="list-row">
             <li>{todo}</li>
             <button>完了</button>
             <button>未完了</button>
            </div>
       );
      })}
        <div className="list-low">
         <li>aaa</li>
         <button>完了</button>
         <button>未完了</button>
        </div>
      </ul>
    </div>
    <div  className="complete-area">
    <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo)=>{
        return(
          <div key={todo} className="list-low">
         <li>{todo}</li>
         <button>戻す</button>
         
        </div>
        )
      })}
        
       
      </ul>
    </div>
  </>
)};