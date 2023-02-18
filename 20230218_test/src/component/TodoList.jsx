import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "./todos";

function TodoList() {
  const todos = useTodoState();
  // console.log(todos);

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}

const List = styled.ul`
  padding: 0;
`;

export default TodoList;
