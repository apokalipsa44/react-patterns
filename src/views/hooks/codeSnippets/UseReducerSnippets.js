export const useReducerCode = `const [state, dispatch] = useReducer(reducer, initialStateValue, init);
                                  // init argument is optional for lazy initialization only
const reducer = (state, action) => {
  switch (action.type) {
    case "MODIFY-STATE-ONE":
      return state + action.payload.someObjectToPass; //just example
    case "MODIFY-STATE-TWO":
      return state + action.payload.someObjectToPass; // just example
    default:
      return state;
  }
};

const stateModifyingFunction = () => {
  dispatch({type: "MODIFY-STATE-ONE", payload: { someObjectToPass: "exampleValue" },
  });
};
const anotherStateModifyingFunction = () => {
  dispatch({type: "MODIFY-STATE-TWO", payload: { someObjectToPass: "exampleValue" },
  });
};`;

export const exampleCode = `import React from "react";
import { useReducer, useState } from "react";

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
  const [todos, dispatch] = useReducer(reducer, []);
  const [todoName, setTodoName] = useState("");

  return (
    <div>
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
            setTodoName("");
          }}
        >
          Add Todo
        </button>
        <button
          onClick={(e) => {
            dispatch({
              type: ACTIONS.CLEAR_TODOS,
              payload: [],
            });
          }}
        >
          clear all
        </button>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>;
        })}
    </div>
  );
}

export default UseReducerView;

function Todo({ todo, dispatch }) {
  return (
    <div>
      <h3>
        {todo.id}: {todo.name}
      </h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          });
        }}
      >
        delete
      </button>
    </div>
  );
}`;
