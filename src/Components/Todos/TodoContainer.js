import React, { useCallback } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import Todos from "./Todo";
import { addTodo, toggleTodo } from "./todos";
import { store } from "./exampleStore";

// Todo Container임
export default function TodoContainer() {
  // useSelector에서 꼭 객체를 반환 할 필요는 없음
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됨
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

  return (
    <Provider store={store}>
      {/* wrap your component with the Provider component */}
      <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    </Provider>
  );
}
