export const mainAppSnippets = `import React from 'react';
import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import store from "./store.js"

function App(){
    return(
        <Provider store={store}>
         <div className="App">
           <Counter></Counter>   
         </div>
        </Provider>
    )
}
export default App;`;

export const mainAppNpms = `npm install redux
npm install react-redux
npm install prop-types`;
