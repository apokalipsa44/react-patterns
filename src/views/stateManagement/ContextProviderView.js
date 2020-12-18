import React from "react";
import { useContext, useState } from "react";

const name = "UserName"  // this can also be an object
export const NameContext = React.createContext(name);

function ContextroviderView() {

  return (
      <div>
        <NameContext.Provider value={name}>
          <NotImportantChild></NotImportantChild>
        </NameContext.Provider>
    </div>
  );
}

export default ContextroviderView;

export function NotImportantChild() {
  return (
    <div>
      <h3>I didn't get any props...</h3>
      <ImportantChild></ImportantChild>
      <h3>end of the first child</h3>
    </div>
  );
}

export function ImportantChild() {
  const name = useContext(NameContext);

  return (
     <div>
  <h3>But i did!</h3>
  <h3>Name passed from context provider: {name}</h3>
  </div>
  );
 
}