import styled from "styled-components";
import { useTodoDispatch } from "./todos";

function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();

  return (
    <Container
      style={{ textDecoration: todo.done && "line-through" }}
      onClick={() => dispatch({ type: "toggle", id: todo.id })}
    >
      {todo.text}
      <Button onClick={() => dispatch({ type: "remove", id: todo.id })}>
        삭제
      </Button>
    </Container>
  );
}

const Container = styled.li`
  list-style: none;
  width: 400px;
  padding: 5px 10px;
  border-bottom: 1px solid;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-left: 10px;
`;

export default TodoItem;
