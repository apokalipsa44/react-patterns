import React from "react";
import { useContext, useState } from "react";

const name = "ddd"  // this can also be an object
export const NameContext = React.createContext(name);

function ContextProviderView() {

  return (
      <div>
        <NameContext.Provider value={name}>
          <NotImportantChild></NotImportantChild>
        </NameContext.Provider>
    </div>
  );
}

export default ContextProviderView;

export function NotImportantChild() {
  return (
    <div style={{backgroundColor:'#d9b041', padding:'12px'}}>
      <h3>I didn't get any props...</h3>
      <ImportantChild></ImportantChild>
      <h3>end of the first child</h3>
    </div>
  );
}

export function ImportantChild() {
  const name = useContext(NameContext);

  return (
     <div style={{backgroundColor:'#f1f1f1', padding:'12px'}}>
  <h3>But i did!</h3>
  <h3>Name passed from context provider: {name}</h3>
  </div>
  );
 
}