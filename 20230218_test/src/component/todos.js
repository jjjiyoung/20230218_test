import { createContext, useContext, useReducer } from "react";

export function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export const initialState = [
  { id: 1, text: "할 일 1", done: false },
  { id: 2, text: "할 일 2", done: true },
  { id: 3, text: "할 일 3", done: false },
];

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  return context;
}
