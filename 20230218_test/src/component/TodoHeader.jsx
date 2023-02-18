import React, { useMemo } from "react";
import styled from "styled-components";
import { useTodoState } from "./todos";

function undoneTodoCount(todos) {
  return todos.filter((todos) => !todos.done).length;
}

function TodoCount(todos) {
  return todos.filter((todos) => todos).length;
}

function TodoHeader() {
  const todos = useTodoState();

  const undoneCount = useMemo(() => {
    return undoneTodoCount(todos);
  }, [todos]);

  const todoCount = useMemo(() => {
    return TodoCount(todos);
  }, [todos]);

  return (
    <Container>
      <DateText>2023년 2월 18일</DateText>
      <CountText>
        해야할 일 : {undoneCount} / {todoCount}
      </CountText>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  padding: 5px 10px;
  border-bottom: 2px solid;
  box-sizing: border-box;
`;
const DateText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const CountText = styled.p`
  font-size: 1rem;
  color: gray;
`;
export default TodoHeader;
