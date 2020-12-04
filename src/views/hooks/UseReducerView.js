import React from "react";
import { useReducer, useState } from "react";
import HooksDescription from "../../components/descriptions/HooksDescription";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Box, Container, Typography } from "@material-ui/core";
import { useReducerCode } from "./codeSnippets/UseReducerSnippets";
import { CallToActionSharp } from "@material-ui/icons";

const ACTIONS = {
  DELETE_TODO: "delete-todo",
  ADD_TODO: "add-todo",
  CLEAR_TODOS: "clear-todos",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.todoName, todos)];
    default:
      return todos;
  }
}
function newTodo(todoName, todos) {
  return {
    id: todos.length,
    name: todoName,
  };
}

function UseReducerView() {
  const useReducerDescription = (
    <div>
      <Typography>
        State management hook similar to <b>reducer</b> from <b>Redux</b>{" "}
        library. You initialize Your state just like in useState hook, but
        instead of <b>setState</b> function there is a <b>dispatch</b> function
        witch provides all state modifying scenarios to Your <b>reducer</b>{" "}
        function (witch in turn does all the work){" "}
      </Typography>
    </div>
  );

  const [todos, dispatch] = useReducer(reducer, []);
  const [todoName, setTodoName] = useState("");

  return (
    <div>
      <HooksDescription
        basicHookCode={useReducerCode}
        basicHookDescription={useReducerDescription}
      ></HooksDescription>
      <Box margin="150px"></Box>
      <Container>
        <input
          type="text"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: ACTIONS.ADD_TODO,
              payload: { todoName: todoName },
            });
          }}
        >
          Add Todo
        </button>
        <Todo todoList={todos}></Todo>
      </Container>
    </div>
  );
}

export default UseReducerView;

function Todo({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div>
            <h3>
              {todo.id + 1}: {todo.name}
            </h3>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
}
