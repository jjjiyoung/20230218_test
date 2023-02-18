import { hover } from "@testing-library/user-event/dist/hover";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "./todos";

function TodoCreate() {
  const [text, setText] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useRef(4);
  const handleInputs = (e) => setText(() => e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "create", id: nextId.current++, text });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input type="text" onChange={handleInputs} value={text} autoFocus />
        <Button>submit</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  box-sizing: border-box;
`;
const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid;
  padding: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;
const Button = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 15px;
  border-style: none;
  background-color: skyblue;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export default TodoCreate;
