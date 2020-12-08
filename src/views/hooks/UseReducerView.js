import React from "react";
import { useReducer, useState } from "react";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { useReducerCode, exampleCode } from "./codeSnippets/UseReducerSnippets";

const ACTIONS = {
  DELETE_TODO: "delete-todo",
  ADD_TODO: "add-todo",
  CLEAR_TODOS: "clear-todos",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.todoName, todos)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.CLEAR_TODOS:
      return action.payload;
    default:
      return todos;
  }
}
function newTodo(todoName, todos) {
  return {
    id: todos.length + 1,
    name: todoName,
  };
}

function UseReducerView() {
  const useReducerDescription = (
    <>
      <Typography component='span'>
        State management hook similar to <b>reducer</b> from <b>Redux</b>{" "}
        library. You initialize Your state just like in useState hook, but
        instead of <b>setState</b> function there is a <b>dispatch</b> function
        witch provides all state modifying scenarios to Your <b>reducer</b>{" "}
        function (witch in turn does all the work){" "}
      </Typography>
    </>
  );

  const [todos, dispatch] = useReducer(reducer, []);
  const [todoName, setTodoName] = useState("");

  return (
    <>
      <Container>
        <HooksDescription
          basicHookCode={useReducerCode}
          basicHookDescription={useReducerDescription}
        ></HooksDescription>
      </Container>

      <Box margin="150px"></Box>
      <Container>
        <TextField
          label="new todo"
          placeholder="what is it You want to do?"
          type="text"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
        />
        <Button
          variant="outlined"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: ACTIONS.ADD_TODO,
              payload: { todoName: todoName },
            });
            setTodoName("");
          }}
        >
          Add Todo
        </Button>{" "}
        <Button
          variant="outlined"
          onClick={(e) => {
            dispatch({
              type: ACTIONS.CLEAR_TODOS,
              payload: [],
            });
          }}
        >
          clear all
        </Button>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>;
        })}
      </Container>
      <Box m="20px"></Box>
      <Container>
        <SyntaxHighlighter style={atomDark} language="jsx">
          {exampleCode}
        </SyntaxHighlighter>
      </Container>
    </>
  );
}

export default UseReducerView;

function Todo({ todo, dispatch }) {
  return (
    <Container>
      <Typography display="inline">
        {todo.id}: {todo.name}
      </Typography>
      <Box display="inline" ml="12px"></Box>
      <Button
        display="inline"
        variant="outlined"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          });
        }}
      >
        delete
      </Button>
      <Box mb="12px"></Box>
    </Container>
  );
}
