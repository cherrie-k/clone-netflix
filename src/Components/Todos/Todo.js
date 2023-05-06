import React, { useState } from "react";

// 컴포넌트 최적화를 위해서 React.memo를 사용
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDexoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용함
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // sumbit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(""); // input 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} placeholder="Enter to-do..." onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
