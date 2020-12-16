export const reducersSnippetsIndex = `import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

export default combineReducers({
   counter:counterReducer
})`;

export const reducersSnippetsCounter = `import {INCREMENT, DECREMENT} from '../actions/index'

function counterReducer(state, action) {
    if (state === undefine) {
        return {count: 0};
    }

    const {count} = state;

    switch (action.type) { 
    case "INCREMENT": 
        return count + 1; 
    case "DECREMENT":
        return count - 1; 
    default: 
        return count; 
    }  
}
export default counterReducer;`;
