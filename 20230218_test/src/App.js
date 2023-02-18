import "./App.css";
import TodoHeader from "./component/TodoHeader";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";
import styled from "styled-components";
import { TodoProvider } from "./component/todos";

function App() {
  return (
    <TodoProvider>
      <Container>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </Container>
    </TodoProvider>
  );
}

const Container = styled.div`
  margin: 10px auto;
  padding: 30px;
  width: 400px;
  height: 800px;
  border: 1px solid #333;
`;
export default App;
