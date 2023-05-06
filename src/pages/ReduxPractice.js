import TodoContainer from "../Components/Todos/TodoContainer";
import { store } from "../Components/Todos/exampleStore";
import { Provider } from "react-redux";

export default function ReduxPractice() {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
}
