// todos 모듈

/* 액션 타입 선언 */
const ADD_TODO = "todos/Add_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

/* 액션 생성함수 선언 */
let nextId = 1; // todo 데이터에서 사용 할 고유 id

export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줌
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체 타입일 필요는 없음
// 배열이어도 되고, 원시 타입 (숫자, 문자열, 불리언 등) 이어도 ㄱㅊ
const initialState = [
  /* 배열 안에 넣을 객체 예시
    {
        id: 1,
        text: '예시',
        done: false
    }
    
    */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        (todo) =>
          todo.id === action.id //id가 일치하면
            ? { ...todo, done: !todo.done } // done 값을 반전시키고
            : todo // 일치하지 않으면 그대로 둠
      );
    default:
      return state;
  }
}
