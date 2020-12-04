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


