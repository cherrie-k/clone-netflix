// https://react.vlpt.us/redux/04-make-modules.html

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";

const rootReducer = combineReducers({
  todos,
});

export const store = configureStore({
  reducer: rootReducer,
}); // 스토어를 만듦

store.subscribe(() => console.log(store.getState())); // 스토어의 상태를 확인해봄
